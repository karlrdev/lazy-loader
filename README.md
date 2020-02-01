# Lazy-loader.js

A simple image lazy loader that builds on the native intersection observer API.

It provides a quick and easy way to apply lazy loading to any number of images 
on a given page. It currently works for image tags and elements that use background images. 


## Usage

For every image you want to lazy load set up the image tags like the following.

```
<img src="" data-src="url to image" class="lazy-image" />
<div class="lazy-image" data-src="url to image">

// Reference to Jquery cdn etc
<script src="jquery.js">
<script src="lazy-loader.js">
<script>
    $(document).ready(function (){
        $(".lazy-image").LazyLoader();
    });
</script>
```

### Dependency's

Depending on your usage you might need to include a polyfill for the intersection observer