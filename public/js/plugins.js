// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function () {};
	var methods = [
	  'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
	  'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
	  'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
	  'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
	  method = methods[length];

	  // Only stub undefined methods.
	  if (!console[method]) {
		console[method] = noop;
	  }
	}
}());

(function($) {
  var ev = new $.Event('classAdded'),
      orig = $.fn.addClass;
  $.fn.addClass = function() {
      $(this).trigger(ev, arguments);
      return orig.apply(this, arguments);
  }
})(jQuery);

/*
 * $$ Selector Cache
 * Cache your selectors, without messy code.
 * @author Stephen Kamenar
 */
(function ($, undefined) {
  // '#a': $('#a')
  var cache = {}

  // '#context': (a cache object for the element)
  var cacheByContext = {}

  // Here for performance/minification
  var tmp, tmp2

  $$ = function(selector, context) {
    if(context) {
      if(tmp=context.selector) context = tmp

      // tmp2 is contextCache
      tmp2 = cacheByContext[context]
      if(tmp2 === undefined) {
        tmp2 = cacheByContext[context] = {}
      }

      tmp = tmp2[selector]
      if(tmp !== undefined) return tmp

      return tmp2[selector] = $(selector, $$(context))
    }

    tmp = cache[selector]
    if(tmp !== undefined) return tmp

    return cache[selector] = $(selector)
  }

  $$clear = function(selector, context) {
    if(context) {
      if(tmp=context.selector) context = tmp

      if(selector) {
        if(tmp = cacheByContext[context]) tmp[selector] = undefined
      }
      cacheByContext[context] = undefined
    } else {
      if(selector) {
        cache[selector] = undefined
        cacheByContext[selector] = undefined
      } else {
        cache = {}
        cacheByContext = {}
      }
    }
  }

  $$fresh = function(selector, context) {
    $$clear(selector, context)
    return $$(selector, context)
  }

  $.fn.$$ = function(selector) {
    return $$(selector, this)
  }
  $.fn.$$clear = function(selector) {
    $$clear(selector, this)
  }
  $.fn.$$fresh = function(selector) {
    return $$fresh(selector, this)
  }
})(jQuery)
