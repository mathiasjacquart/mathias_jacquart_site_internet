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


particlesJS("particles-js-header", 
{"particles":
  {"number":
    {"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; 

particlesJS("particles-js-footer", 
{"particles":
  {"number":
    {"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; 

// PROGRESS BAR JS 


// function move(allBar) {

//   for (let currentBar of allBar) {

//     let currentBarID = currentBar.getAttribute('id')
//     let currentBarPourcent = currentBar.dataset.pourcentval
    
//     console.log('currentBarID = '+currentBarID)
//     console.log('currentBarPourcent = '+currentBarPourcent)
//     let i = 0;
//     if (i == 0) {
//       i = 1;
//       var elem = document.getElementById(currentBarID);
//       console.log(elem)
//       var width = 1;
//       var id = setInterval(frame(elem, currentBarPourcent), 10);
      
//       function frame(elem, currentBarPourcent) {
//         if (width >= currentBarPourcent) {
//           clearInterval(id);
//           i = 0;
//         } else {
//           width++;
//           elem.style.width = width + "%";
//         }
//       }

//     }
    
//   }


//   return true
// }

// const allBar = document.querySelectorAll('.progressBar')
// const myBar = document.querySelector('.my-skill')

// window.addEventListener('scroll', () => { 
//     const {scrollTop, clientHeight} = document.documentElement 
//     const topElementtoTopViewport = myBar.getBoundingClientRect().top;

//     if (scrollTop > (scrollTop + topElementtoTopViewport).toFixed()){
//         let result = move (allBar)
//         console.log(result)
//     }
        

// data-pourcentval

// })



// TYPE WRITTER INTRO

// var i = 0;
// const titreIntro = document.getElementById("TextTitre")
// speed = 100
// let text = `Hello, moi, c'est Mathias, Développeur Web Junior !`


// function typeWriter() {
//     if (i < text.length) {
//         titreIntro.innerHTML += text.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
        
//     } else {
//         // Frappe terminé, class hiden sur le curseur (opacité =0)
//         document.getElementById("cursor").classList.add("hidden");
//     }
// }
// typeWriter()


const titreIntro = document.getElementById('title-intro');
let typewriter = new Typewriter(titreIntro, {
    loop: false
});

typewriter.typeString('Hello !')
    .pauseFor(3000)
    .deleteAll()
    .typeString('Moi, c\'est Mathias,')
    .pauseFor(1000)
    .typeString('<br><strong> Développeur Web Junior </strong> !')
    .pauseFor(1000)
    .deleteChars(9)
    .typeString(`<strong><span style="color:#90EE90">HTML</span></strong> !`)
    .pauseFor(1000)
    .deleteChars(6)
    .typeString(`<strong><span style="color:#ADD8E6">CSS</span></strong> !`)
    .pauseFor(1000)
    .deleteChars(5)
    .typeString(`<strong><span style="color:#FFFFCC">JavaScript</span></strong> !`)
    .pauseFor(1000)
    .deleteChars(12)
    .typeString(`<strong id="junior-anim">Junior</strong> !`)
    .start()
    .callFunction(callBackTypeWritter);


function callBackTypeWritter () { 
  const p1 = document.getElementById('title-p1')
  p1.style.opacity = "1"

  // const cursor = document.getElementsByClassName('.Typewriter__cursor')
  // cursor.style.opacity ="0"

   
  const colorJuniorAnim = document.getElementById('junior-anim'); 
  const changeColor = ['#90EE90', '#ADD8E6', '#FFFFCC'];
  let i = 0;
  
  setInterval(() => {
    colorJuniorAnim.style.color = changeColor[i];
  i++
  if (i===changeColor.length) { 
    i=0
  }
  }, 1400);
  
}


// NAV SCROLLING BACKGROUNDCHANGE

// window.addEventListener('scroll', () => {
//   const Nav = document.querySelector("nav")
//   const NavBar = document.querySelector ('.header-nav')
//   const Element1 =  document.querySelector('.titre-intro')
//   const {scrollTop, clientHeight} = document.documentElement 
//   const topElementtoTopViewport = Element1.getBoundingClientRect().top;

//   if (scrollTop > (scrollTop + topElementtoTopViewport).toFixed() - clientHeight *0.10) {
//       NavBar.classList.add('scrolled');
//       Nav.classList.add('scrolled');

//   } else { 
//     NavBar.classList.remove('scrolled');
//   }
  
// })


// DISPLAY BLOG 


function AfficherBlog() {
 const hidden = document.querySelector(".hidden-content") 
 console.log(hidden)
const hiddenElements = document.querySelectorAll('[class*="hidden-content-"]')
console.log(hiddenElements)
  if (hiddenElements.length > 0) { 
    hidden.style.position = "relative"
    hidden.style.top = "0"
    for (let hiddenEl of hiddenElements){ 
      hiddenEl.style.opacity = "1"
      // }else { 
      // hidden.style.opacity= "0" 
    }
  } 
}


//RESPONSE FORM 

let response = document.createElement('div');
response.classList.add('response')
console.log(response)
let responseParent = document.getElementById('rowForm');
responseParent.appendChild(response)


