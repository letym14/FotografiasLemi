// Get the element to animate
const $ocultos = $(".oculta");
let screenSize = window.innerHeight;

// Check if the element is in the viewport
function isInViewport(element) {
  if (element.getBoundingClientRect().top < screenSize) {
    return true;
  } else {
    return false;
  }
}

// Function to handle the scroll event
function handleScroll() {
  for (let i = 0; i < $ocultos.length; i++) {
    let element = $ocultos[i];
    if (isInViewport(element)) {
      element.classList.add("visible");
      if (element.classList.contains("seccionVacia")) {
        element.style.opacity="0.5";
      }
    } else {
      element.classList.remove("visible");
    }
  }
}

// Add the event listener
$(window).on("scroll", handleScroll);
