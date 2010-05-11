# jQuery PlaceHeld #

Copyright (c) 2010 Max Wheeler. Licensed under the [WTFPL](http://sam.zoy.org/wtfpl/)

Version:    1.0.2 
Build date: 2010-05-10

## Overview ##

jQuery plugin that provides fallback support for HTML5 placeholder attributes in browsers that don't yet support it.

## Usage ##

Dead simple, just call the `placeHeld()` function on any `<input>` elements you want to use placeholder text for. This will probably look something like:

    $("input[placeholder]").placeHeld();

In browsers that support `placeholder` attributes (Safari, Chrome), nothing will happen. Other browsers will show the contents of the `placeholder` attribute (by populating the `value` attribute) and a "placeheld" class will toggle on/off. You can customise the class by passing in a default value in the initialisation:

    $("input[placeholder]").placeHeld({
      className: "i-dislike-your-naming-conventions"
    });

Also, it may seem obvious, but you'll need to actually have `placeholder="foo"` attributes on the elements you're targeting else the plugin won't know where to source the place holder text.

## Changelog ##

1.0.2:

* Removed default text from form submition
* Moved placeholder support check outside for() loop

1.0.1:

* Minified using YUI compressor instead ofo JSMin

1.0.0:

* Initial version


