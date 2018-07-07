(function(core, $, cache, undefined) {
  'use strict';

  core.removeLoader = function() {
    $('.pre-loader').fadeOut(500, function(){
        $(this).remove();
        $('.navbar').css({opacity: 1.0, visibility: 'visible'});
      }
    );
  }

  core.handleScrolling = function() {
    // Smooth scrolling using jQuery easing
    var headerHeight = cache('.navbar').innerHeight();
    cache('a.js-scroll-trigger[href*=\'#\']:not([href=\'#\'])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          cache('html, body').animate({
            scrollTop: (target.offset().top - headerHeight)
          }, 1000, 'easeInOutExpo');
          return false;
        }
      }
    });

    cache('.nav-link', '.navbar-nav .nav-item').each(function() {
      cache(this).attr('href', cache(this).attr('href').replace(/^\/+|\/+$/g, ''));
    });

    cache('body').scrollspy({
      target: '.navbar',
			offset: $(window).height() * 0.2 //offset.top
    });

    core.setActiveSection(0);

    cache(document).on('keydown', function(e) {
      if (!$('input, textarea').is(':focus')) {
        var sections = cache('.jumbotron, section');
        var activeSection = sections.filter('.active'),
            prevSection = activeSection.prev(),
            nextSection = activeSection.next();
        switch (e.keyCode) {
          case 40 : // Scroll down
            if (nextSection.length && sections.index(nextSection) < sections.length) {
              e.preventDefault();
              e.stopPropagation();
              core.scrollToSection(sections, sections.index(nextSection));
            }
            break;
          case 38 : // Scroll up
            if (prevSection.length && sections.index(prevSection) > -1) {
              e.preventDefault();
              e.stopPropagation();
              core.scrollToSection(sections, sections.index(prevSection));
            } break;
        }
      }
    });

    cache(window).on('scroll', function(e) {
      if ($(this).scrollTop() > 400) {
        $('.back-to-top').fadeIn();
      } else {
        $('.back-to-top').fadeOut();
      }
      clearTimeout($.data(this, 'scrollTimer'));
      $.data(this, 'scrollTimer', setTimeout(function() {
        var navItems = cache('.nav-link', '.navbar-nav .nav-item');
        var magicLine = cache('.magic-line', '.navbar-nav');
        var activeItem = navItems.filter('.active');
        core.setActiveMenu(magicLine, activeItem);
        core.setActiveSection(navItems.index(activeItem));
        clearTimeout($.data(this, 'scrollTimer'));
      }, 400));
    });
  }

  core.scrollToSection = function(sections, index){
    var element = sections.eq(index);
    var headerHeight = cache('.navbar').innerHeight();
    var navItems = cache('.nav-link', '.navbar-nav .nav-item');
    var activeItem = navItems.eq(index);
    var magicLine = cache('.magic-line', '.navbar-nav');
    cache('html, body').stop().animate({
      scrollTop: (element.offset().top - headerHeight)
    }, 400, 'easeInOutExpo');
    core.setActiveSection(index);
    core.setActiveMenu(magicLine, activeItem);
  }

  core.animateMenu = function() {
    var navItems = cache('.nav-link', '.navbar-nav .nav-item');
    navItems.append('<li class=\'magic-line\'></li>');
    var magicLine = cache('.magic-line', '.navbar-nav');

    core.setActiveMenu(magicLine, navItems.filter('.active'));

    navItems.hover(
      function() {
        var link = cache(this).find('span');
        magicLine.stop().animate({
          left: link.position().left,
          width: link.width()
        });
      },
      function() {
        magicLine.stop().animate({
          left: magicLine.data('position-left'),
          width: magicLine.data('position-width')
        });
      }
    );

    navItems.on('click', function() {
      core.setActiveMenu(magicLine, cache(this));
      core.setActiveSection(navItems.index(cache(this)));
    });
  }

  core.setActiveMenu = function(magicLine, activeItem) {
    var link = activeItem.find('span');
    magicLine
      .width(link.width())
      .css('left', link.position().left)
      .data('position-left', magicLine.position().left)
      .data('position-width', magicLine.width());
  }

  core.setActiveSection = function(index) {
    cache('.jumbotron, section').eq(index).addClass('active').siblings().removeClass('active');
  }

  core.animateIntro = function() {
    var title = $('.title', '.intro'),
        subtitle = $('.subtitle', '.intro'),
        text = subtitle.data('type'),
        pause = subtitle.data('pause'),
        length = text.length;
    var typewriter = new Typewriter(subtitle[0], {
      loop: true
    });
    title.textillate();
    title.on('inAnimationEnd.tlt', function () {
      setTimeout(function() {
        $.each(text, function (index, value) {
          typewriter.typeString(value);
          if (index === (length - 1)) {
            typewriter.start();
          } else {
            typewriter.pauseFor(pause);
            typewriter.deleteAll();
          }
        });
      }, 400);
    });
  }

  core.animateSkills = function() {
    $(".skills").removeClass("active");
    $(".skills .skill .skill-bar").children('span').remove();
    $(".skills .skill .skill-bar").css({'opacity': 0});
    $(".skills .skill .skill-bar").each(function() {
      $(this).append('<span></span>');
    });
    $(".skills .skill .skill-bar span").each(function() {
      $(this).animate({
        "width": $(this).parent().attr("data-bar") + "%"
      }, 1000, function() {
        $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
        setTimeout(function() {
          $(".skills .skill .skill-bar span b").animate({"opacity":"1"}, 2000);
        }, 1000);
      });
    });
    $(".skills .skill .skill-bar").css({'opacity': 1});
    $(".skills").addClass("active");
  }

  core.initMap = function() {
    var location = new google.maps.LatLng(-33.809654480672584,151.0853515144636);
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: location,
        zoom: 11,
        panControl: true,
        draggableCursor: 'pointer',
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
  }

  core.onSubmit = function(token) {
    var formData = {
      token: token,
      name: core.strip($('.contact-form #name').val()),
      email: core.strip($('.contact-form #email').val()),
      subject: core.strip($('.contact-form #subject').val()),
      message: core.strip($('.contact-form #message').val())
    };
    $.post({
      url: window.location + 'contact',
      data: JSON.stringify(formData),
      dataType: 'json',
      contentType: 'application/json;charset=UTF-8'
    })
    .done(function() {
      core.onSuccess();
      $('.contact-form')[0].reset();
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      core.onFailure(jqXHR, textStatus, errorThrown);
    })
    .always(function() {
      $('.contact-form').removeClass('was-validated');
      grecaptcha.reset();
    });
  }

  core.onSuccess = function() {
    core.modal('Thank You!', 'Your message has been sent and I\'ll get back to you in a moment. If you don\'t seem get any answer please contact me directly by email or phone.', '<i class=\'fa fa-smile-o\'></i> Ok');
  }

  core.onFailure = function(jqXHR, textStatus, errorThrown) {
    var title = 'Your Message Could Not Be Sent',
        message = '<p>There was an error trying to send your message. Please try again later.</p>';
    if (jqXHR.readyState === 4 && jqXHR.status === 422) {
      title = 'Validation Failed';
      message = '<p>One or more fields have an error. Please check and try again.</p>';
      try {
        var $ul = $('<ul>'),
            errors = $.parseJSON(jqXHR.responseText)['errors'];
        for(var i in errors) {
          $ul.append(`<li>${errors[i]['msg']}.</li>`);
        }
        message += $ul.html();
      }
      catch (e) {
      }
    }
    core.modal(title, message, '<i class=\'fa fa-frown-o\'></i> Ok');
  }

  core.strip = function(html) {
    var element = document.createElement('div');
    element.innerHTML = html;
    return element.textContent || element.innerText || '';
  }

  core.modal = function(title, message, icon) {
    var $modal = $('.modal');
    $modal.find('.modal-title').text(title);
    $modal.find('.modal-body').html(message);
    $modal.find('.modal-footer button').html(icon);
    $modal.modal({
      show : true
    });
  }
})(window.core = window.core || {}, $, $$);

$(document).ready(function () {
  autosize($('textarea'));

  $('.carousel-item:first', '.carousel').addClass('active');
  $('.carousel').carousel();

  $('.back-to-top').hide();

  $(document).on('click', '.back-to-top', function() {
    core.setActiveSection(0);
    $('body, html').animate({
      scrollTop: 0
    }, 400, 'easeInOutExpo');
    return false;
  });

  $(document).on('click', '.submit-form-btn', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var $form = $('.contact-form');
    $form.addClass('was-validated');
    if ($form[0].checkValidity() !== false) {
      grecaptcha.execute();
    }
  });

  $('[data-toggle="tooltip"]').tooltip();

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $(".tab-content").animate({ scrollTop: 0 }, "fast");
    core.animateSkills();
  });

  $('.tab-pane').each(function(index) {
    $(this).addClass(index === 0 ? 'fade show active' : 'fade');
  });

  core.removeLoader();
  core.handleScrolling();
  core.animateMenu();
  core.animateIntro();
  core.animateSkills();
  core.initMap();

  window.handleSubmit = core.onSubmit;
});
