// Get the element to animate
const $seccion = $(".front-page");
let screenSize = window.innerHeight - 550;

// Check if the element is in the viewport
function isInViewport() {
  if ($seccion.offset().top < screenSize) {
    return true;
  } else {
    return false;
  }
}

// Function to handle the scroll event
function handleScroll() {
  if (isInViewport()) {
    //scroll position
    let scrollPosition = $(window).scrollTop() + 100;
    //element position

    //percent of scroll
    let percent = (scrollPosition / screenSize) * 100;

    //change the opacity of the element
    $seccion.css("clip-path", `circle(${percent}%)`);

  }
}

// Add the event listener

$(window).on("scroll", handleScroll);
