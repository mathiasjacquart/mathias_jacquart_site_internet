// anime.loader.JS

$(window).on('load', function() { // makes sure the whole site is loaded 
	$('#status').delay(3000).fadeOut('slow'); // will first fade out the loading animation 
	$('#preloader').delay(4000).fadeOut('slow'); // will fade out the white DIV that covers the website. 

})
anime.timeline({loop: false})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 800,
    easing: "easeOutExpo",
    translateY: function(e, i, l) {
      var offset = -0.625 + 0.625*2*i;
      return offset + "em";
    }
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 3500,
    easing: "easeOutExpo",
    delay: 3500
  });

// anim particle bg 


particlesJS("particles-js", 
{"particles":
  {"number":
    {"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; 

// PROGRESS BAR JS 

var i = 0;
function move(toto1, toto2) {


  for (let currentBar of allBar) {

    let currentBarID = currentBar.getAttribute('id')
    let currentBarPourcent = currentBar.dataset.pourcentval
    
    console.log('currentBarID = '+currentBarID)
    console.log('currentBarPourcent = '+currentBarPourcent)
    let result = move (currentBarID,currentBarPourcent)

    console.log(result)
  }


  if (i == 0) {
    i = 1;
    var elem = document.getElementById(toto1);
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= toto2) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
  return true
}



const myBar = document.querySelector('.my-skill')
window.addEventListener('scroll', () => { 
    

      for (let currentBar of allBar) {

        let currentBarID = currentBar.getAttribute('id')
        let currentBarPourcent = currentBar.dataset.pourcentval
        
        console.log('currentBarID = '+currentBarID)
        console.log('currentBarPourcent = '+currentBarPourcent)
        let result = move (currentBarID,currentBarPourcent)

        console.log(result)
      }
      
    }
        

// data-pourcentval

})

// Select the target element
const allBar = document.querySelectorAll('.progressBar');

// Set the initial width of the target element to 0
allBar.style.width = '0%';

// Set the target width of the target element based on its data-pourcentval attribute
const allBarTargetWidth = parseInt(targetElement.dataset.pourcentval, 10) + '%';

// Set a flag to track if the target element is currently being animated
let isAnimating = false;

// Add a scroll event listener to the window object
window.addEventListener('scroll', () => {
  const {scrollTop, clientHeight} = document.documentElement 
  
  const topElementtoTopViewport = myBar.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementtoTopViewport).toFixed()){
    // If the target element is in the viewport, animate its width to the target width
    if (!isAnimating) {
      isAnimating = true;
      animateWidth();
    }
  }
});

// Define a function to animate the width of the target element
function animateWidth() {
  // Get the current width of the target element
  const currentWidth = parseInt(targetElement.style.width, 10);

  // Calculate the difference between the current width and the target width
  const diff = Math.abs(currentWidth - parseInt(targetWidth, 10));

  // Calculate the increment for the next frame
  const increment = diff / 20;

  // Update the width of the target element
  if (currentWidth < parseInt(targetWidth, 10)) {
    targetElement.style.width = `${currentWidth + increment}%`;
  } else {
    targetElement.style.width = `${currentWidth - increment}%`;
  }

  // Check if the target width has been reached
  if (Math.abs(currentWidth - parseInt(targetWidth, 10)) > 1) {
    // If the target width has not been reached, request the next frame
    requestAnimationFrame(animateWidth);
  } else {
    // If the target width has been reached, reset the flag
    isAnimating = false;
  }
}