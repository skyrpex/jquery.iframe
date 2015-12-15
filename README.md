# jquery.iframe

jQuery plugin that creates inline iframes to isolate certain blocks of HTML.

## Usage

```bash
npm install jquery.iframe --save-dev
```

```javascript
// Way 1: create an iframe and append it to the body.
let iframe = $.iframe('body', { /* options... */ });

// Way 2: wrap .my-div into an iframe.
$('.my-div').iframify(, { /* options... */ });
```

## Options
There are the default options:
```javascript
{
  // jQuery method used to append the iframe element.
  insertMethod: 'appendTo',
  // List of CSS urls that will be loaded into the iframe.
  css: [],
  // Height sync between the iframe element and its contents.
  sync: {
    // Attribute that will be updated in pixels with the content's height. Possible values are height, minHeight and maxHeight.
    attribute: 'height',
    // Interval time in milliseconds that will be used to poll the content's height.
    interval: 10,
  },
}
```

## Caveats
* Don't move or remove the iframe from the DOM unless you wan't it to stop working.
