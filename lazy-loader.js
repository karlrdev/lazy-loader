import $ from "jquery";
import "intersection-observer";

// Code

$(document).ready(function(){
    // Get all elements that have the lazy loading class
    const $images = $(".lazy-image");

    // Set up an intersection observer method
    const observer = new IntersectionObserver((entries, observer) => {
        // Go through each element that has triggered the observer
        $.each(entries, function(index, element){
            // This is the important bit the intersecion ratio tells the browser
            // that the image has come into view this ratio is between 0.0 and 1.0
            if (element.intersectionRatio > 0) {
                // Get the element
                const $htmlElement = $(element.target);
                // Pass element to handle loading
                handleLazyLoading($htmlElement);
                // Make sure to unobserve the element so that it wont keep firing
                observer.unobserve(element.target);
            }
        });
    });
    
    // Check if any lazy images exist
    if($images.length > 0) {
        // set up the watcher here
        $images.each(function () {
            // Get the attribute
            const attr = $(this).attr("data-src");
            // Check attribute is present before setting the observer
            if(typeof attr !== typeof undefined && attr !== false) {
                // create the observer
                observer.observe(this);
            }
            else{
                throw `A lazy image exists but has no data-src attribute, please check all your image tags. Failed here ${this.outerHTML}`;
            }
        });
    }
    else{
        console.warn("...Nothing to lazy load");
    }
});

function handleLazyLoading($htmlElement){
    if($htmlElement.is("img")){
        lazyLoadImageTag($htmlElement);
    }
    else{
        lazyloadBackgroundImage($htmlElement);
    }
}

function lazyloadBackgroundImage($htmlElement){
    // Get image url
    var imageUrl = $htmlElement.attr("data-src");
    // Set image url as a background to the element
    $htmlElement.css("background-image", `url('${imageUrl}')`);
}

function lazyLoadImageTag($image){
    // Get the images data-src attribute
    const $imageSrc = $image.attr("data-src");
    // Set the images src attribute here
    $image.attr("src", $imageSrc);
}

// Mark up

//<img src="" data-src="https://url-to-image" class="lazy-image" />
//<div data-src="https://url-to-image" class="lazy-image"></div>
