// PlaceHeld jQuery plugin by [Max Wheeler](max@makenosound.com)
// 
// Copyright (c) 2010 Max Wheeler. Licensed under the [WTFPL](http://sam.zoy.org/wtfpl/)
// Dependencies: jQuery
//
// Changelog:
// * v1.0.0 (2010-04-21) Initial Version

(function($){
  $.placeHeld = function(el, options){
    var base = this;
    base.$el = $(el);
    base.el = el;
    base.$el.data("placeHeld", base);
    base.placeholderText = base.$el.attr("placeholder");
    
    base.init = function(){
      base.options = $.extend({},$.placeHeld.defaultOptions, options);
      // Check for placeholder attribute support
      if (!!("placeholder" in $('<input>')[0])) return;
      base.$el.bind('blur', base.holdPlace).bind('focus', base.releasePlace).trigger('blur');
    };
    // Hold with the default value attribute
    base.holdPlace = function() {
      var value = base.$el.val();
      if (!value) base.$el.val(base.placeholderText).addClass(base.options.className);
    };
    // Refill with the default value attribute
    base.releasePlace = function() {
      var value = base.$el.val();
      if (value == base.placeholderText) base.$el.val('').removeClass(base.options.className);
    };
    base.init();
  };
  
  $.placeHeld.defaultOptions = { className: "placeheld" };
  
  $.fn.placeHeld = function(options) {
    return this.each(function() {
      (new $.placeHeld(this, options));
    });
  };
})(jQuery);