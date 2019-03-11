#Lazy-loader

This is a simple image lazy loader that builds on the native intersection observer API.

It provides a quick and simple way to apply lazy loading to any number of image tags
that are present on the page.

## Building the project

Simply run "npm install" and then run "npm run build" the build results can be found in
the "dist" directory found in the root.

## Usage

Once built include the js file in the footer of the page and then for every image you
want to lazy load set up the image tags as the following.

`<img src="" data-src="url to image" class="lazy-image" />`

the src attribute is optional as it gets over written by the tool.