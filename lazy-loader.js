
// inititalise
(function ( $ ) {
    $.fn.LazyLoader = function() {
        const observer = createObserver();
        return this.each(function(){
            setupElement($(this), observer);
        });
    };
}( jQuery ));

function createObserver(){
    // Set up an intersection observer method
    return new IntersectionObserver((entries, observer) => {
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
}

function setupElement($element, observer){
    // Get the attribute
    const attr = $element.attr("data-src");
    // Check attribute is present before setting the observer
    if(typeof attr !== typeof undefined && attr !== false) {
        // create the observer
        observer.observe($element[0]);
    }
    else{
        throw `A lazy load element exists but has no data-src attribute, please check all your tags. Failed here ${this.outerHTML}`;
    }
}

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
