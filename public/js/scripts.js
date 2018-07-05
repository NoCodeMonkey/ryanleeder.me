(function(core, $, undefined) {
  'use strict';

  $.selector_cache = function (selector) {
		if (!$.selector_cache[selector]) {
			$.selector_cache[selector] = $(selector);
		}
		return $.selector_cache[selector];
	};

  core.removeLoader = function() {
    $('.pre-loader').fadeOut(500, function(){
        $('.pre-loader').remove();
        $('.navbar').css({opacity: 1.0, visibility: 'visible'});
      }
    );
  }

  core.createScroller = function() {
    $('.nav-link').each(function() {
      $(this).attr('href', $(this).attr('href').replace(/^\/+|\/+$/g, ''));
    });
		$('body').scrollspy({
      target: '.navbar',
			offset: $(window).height() * 0.2 //offset.top
    });
  }

  core.animateMenu = function() {
    var $mainNav = $('.navbar-nav');
    $mainNav.append('<li class=\'magic-line\'></li>');
    var $magicLine = $('.magic-line');
    var $navLinks = $mainNav.find('.nav-item .nav-link');
    var $activeNavLink = $navLinks.closest('.active');
    core.setActiveMenu($magicLine, $activeNavLink);
    $navLinks.hover(
      function() {
        var $el = $(this).find('span');
        $magicLine.stop().animate({
          left: $el.position().left,
          width: $el.width()
        });
      },
      function() {
        $magicLine.stop().animate({
          left: $magicLine.data('position-left'),
          width: $magicLine.data('position-width')
        });
      }
    );
    $($navLinks).on('click', function() {
      core.setActiveMenu($magicLine, $(this));
    });
    $(window).on('activate.bs.scrollspy', function (e) {
      var $activeNavLink = $navLinks.closest('.active');
      core.setActiveMenu($magicLine, $activeNavLink);
    });
  }

  core.setActiveMenu = function($magicLine, $activeNavLink) {
    var $el = $activeNavLink.find('span');
    $magicLine
      .width($el.width())
      .css('left', $el.position().left)
      .data('position-left', $magicLine.position().left)
      .data('position-width', $magicLine.width());
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

  core.strip = function(html)
  {
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
})(window.core = window.core || {}, jQuery);

$(document).ready(function () {
  autosize($('textarea'));

  var headerHeight = $('.navbar').innerHeight();

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*=\'#\']:not([href=\'#\'])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - headerHeight)
        }, 1000, 'easeInOutExpo');
        return false;
      }
    }
  });

  $('.carousel-item:first', '.carousel').addClass('active');
  $('.carousel').carousel();

  $('.back-to-top').hide();

  $(window).on('scroll', function(){
    if ($(this).scrollTop() > 400) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });

  // scroll body to 0px on click
  $(document).on('click', '.back-to-top', function() {
    $('body, html').animate({
      scrollTop: 0
    }, 400);
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

  core.removeLoader();
  core.createScroller();
  core.animateMenu();
  core.animateIntro();
  core.initMap();

  window.handleSubmit = core.onSubmit;
});
