# Lazy-loader.js

A simple image lazy loader that builds on the native intersection observer API.

It provides a quick and easy way to apply lazy loading to any number of image tags
on a given page.

It requires no configuration and provides informative errors via the console.

## Usage

Simply include the js file from the dist folder in the footer of the page and then 
for every image you want to lazy load set up the image tags like the following.

`<img src="" data-src="url to image" class="lazy-image" />`

the src attribute is optional as it gets over written by the tool.

### Dependency's

This project uses the intersection observer polyfill by W3C and was written using jquery
for speed. Both are bundled together when built so no further dependency's are needed.
Just include lazy-loader.js and your good to go!