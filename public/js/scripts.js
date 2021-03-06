(function(core, $, undefined) {
  'use strict';

  core.removeLoader = function() {
    $('.pre-loader').fadeOut(500, function(){
      $(this).remove();
    });
  }

  core.handleScrolling = function() {
    $('.nav-link', '.navbar-nav .nav-item').each(function() {
      $(this).attr('href', $(this).attr('href').replace(/^\/+|\/+$/g, ''));
    });

    $('body').scrollspy({
      target: '.navbar',
			offset: $('.navbar-brand').innerHeight() + parseInt(getComputedStyle(document.documentElement).fontSize)
    });

    $(window).on('scroll', function(e) {
      if ($(this).scrollTop() > 400) {
        $('.back-to-top').fadeIn();
      } else {
        $('.back-to-top').fadeOut();
      }
    });

    $('.js-scroll-trigger').on('click', function(e) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        e.preventDefault();
        e.stopPropagation();
        $('[data-toggle="title-tooltip"]').tooltip('hide');
        core.scrollToSection(target);
        if ($('.navbar-toggler').css('display') !== 'none'){
          $('.navbar-toggler').trigger('click');
        }
        return false;
      }
    });
  }

  core.scrollToSection = function(target){
    var headerHeight = $('.navbar-brand').innerHeight();
    $('html, body').stop().animate({
      scrollTop: (target.offset().top - headerHeight)
    }, 400, 'easeInOutExpo');
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

  core.animateSkillsMatrix = function() {
    $(".skills-matrix").removeClass("active");
    $(".skills-matrix .skill .skill-bar").children('span').remove();
    $(".skills-matrix .skill .skill-bar").css({'opacity': 0});
    $(".skills-matrix .skill .skill-bar").each(function() {
      $(this).append('<span></span>');
    });
    $(".skills-matrix .skill .skill-bar span").each(function() {
      $(this).animate({
        "width": $(this).parent().attr("data-bar-width") + "%"
      }, 1000, function() {
        $(this).append('<b>' + $(this).parent().attr("data-bar-width") + '%</b>');
        setTimeout(function() {
          $(".skills-matrix .skill .skill-bar span b").animate({"opacity":"1"}, 2000);
        }, 1000);
      });
    });
    $(".skills-matrix .skill .skill-bar").css({'opacity': 1});
    $(".skills-matrix").addClass("active");
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
      $('.submit-form-btn')
        .text("Contact Me")
        .prop("disabled", false);
      grecaptcha.reset();
    });
  }

  core.onSuccess = function() {
    core.modal('Thank You!', 'Your message has been sent and I\'ll get back to you in a moment. If you don\'t seem get any answer please contact me directly by email or phone.', '<i class=\'far fa-smile\'></i> Ok');
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
          $ul.append('<li>');
          $ul.append(errors[i]['msg']);
          $ul.append('.</li>');
        }
        message += $ul.html();
      }
      catch (e) {
      }
    }
    core.modal(title, message, '<i class=\'far fa-frown\'></i> Ok');
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
})(window.core = window.core || {}, $);

$(document).ready(function () {
  autosize($('textarea'));

  $('.carousel-item:first', '.carousel').addClass('active');
  $('.carousel').carousel();

  $('.back-to-top').hide();

  $(document).on('click', '.back-to-top', function() {
    core.scrollToSection($('#page-top'));
    return false;
  });

  $(document).on('click', '.submit-form-btn', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var $form = $('.contact-form');
    $form.addClass('was-validated');
    if ($form[0].checkValidity() !== false) {
      $('.submit-form-btn')
        .text("Please wait...")
        .prop("disabled", true);
      grecaptcha.execute();
    }
  });

  $('[data-toggle="title-tooltip"]').each(function() {
    var listClass = $(this).parent('.nav-item').prop("class").replace("nav-item", "").trim();
    $(this).tooltip({
      template: "<div class=\"tooltip " + listClass + "\" role=\"tooltip\"><div class=\"arrow\"></div><div class=\"tooltip-inner\"></div></div>",
      delay: {
        "show": 2000,
        "hide": 100
      }
    });
  });
  $('[data-toggle="tooltip"]').tooltip();

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $(".tab-content").animate({ scrollTop: 0 }, "fast");
    core.animateSkillsMatrix();
  });

  $('.tab-pane').each(function(index) {
    $(this).addClass(index === 0 ? 'fade show active' : 'fade');
  });

  $(document).on('click', '.expand-timelines', function (e) {
    $('.timeline-body.collapse:not(".show,.collapsing")').collapse('show');
  });
  $(document).on('click', '.collapse-timelines', function (e) {
    $('.timeline-body.collapse.show').collapse('hide');
  });

  //$('.timeline-navigation').stick_in_parent('.timeline');
  $('.timeline-navigation > li').hover(
    function () {
      $('a', $(this)).stop().animate({'marginLeft':'64px'}, 200);
    },
    function () {
      $('a', $(this)).stop().animate({'marginLeft':'-38px'}, 200);
    }
  );

  $(document).on("click", '[data-toggle="lightbox"]', function(e) {
    e.preventDefault();
    $(this).ekkoLightbox({
      alwaysShowClose: false
    });
  });

  $(document).on("click", '.info', function(e) {
    e.preventDefault();
    var elem = $(this);
    var content = '';
    var description = elem.data('description');
    var technologies = elem.data('technologies');
    if (description && description.length) {
      content += '<h6>Brief</h6>'
      content += description;
      if (technologies) {
        content += '<br /><br />';
      }
    }
    if (technologies && technologies.length) {
      var tech = technologies.split(',');
      content += '<h6>Technologies Used</h6>'
      content += '<div class="tag-cloud small">';
      for (i = 0; i < tech.length; i++) {
        content += '<span>'
        content += tech[i];
        content += '</span>'
      }
      content += '</div>';
    }
    core.modal(elem.data('title'), content, '<i class=\'far fa-smile\'></i> Ok');
    return false;
  });

  $(document).on("click", '.website', function(e) {
    e.preventDefault();
    window.open(this.href);
    return false;
  });

  core.removeLoader();
  core.handleScrolling();
  core.animateIntro();
  core.animateSkillsMatrix();
  core.initMap();

  window.handleSubmit = core.onSubmit;
});
