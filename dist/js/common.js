var mobileButton = document.getElementsByClassName('nav-mobile-js')[0];
var navList = document.getElementsByClassName('nav-list-js')[0];
var navbt = document.getElementsByClassName('nav-mobile-button')[0];
var first = 1;
mobileButton.onclick = function(argument) {
  if (first == 1) {
    navList.classList.add("nav-list_open");
    navbt.classList.add("nav-mobile_open");
    first = 0;
  }else{
    navList.classList.remove("nav-list_open");
    navbt.classList.remove("nav-mobile_open");
    first = 1;
  }
  return false;
}


var mnu = document.getElementsByClassName("nav-scroll-js")[0];

mnu.onclick = function(event) {
  var target = event.target; 
   if (target.tagName != 'A') {
    if (target.tagName == 'I') {
      target = target.parentNode;
    }
   } 
  var link = target.getAttribute("href");
  var dist = document.querySelector(link).offsetTop-78;
  if (window.innerWidth < 500) {
    navList.classList.remove("nav-list_open");
    navbt.classList.remove("nav-mobile_open");
    first = 1;
  }
  runScroll(dist);
  return false;
};

var scrollDelAnim = document.getElementsByClassName('scroll-delayed-anim');

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (window.innerWidth > 900) {
    var winVisible = scrolled + (window.innerHeight*0.8)
    for (var i = 0; i <= scrollDelAnim.length - 1; i++) {
      if (scrollDelAnim[i].offsetTop < winVisible ) {
       scrollDelAnim[i].querySelector('.left-box').classList.add("animation_from-right");
       scrollDelAnim[i].querySelector('.right-box').classList.add("animation_from-left");
     }
   }
 }
}



function runScroll(dist) {
  scrollTo(document.body, dist, 600);
}

function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop == to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}




function smothscroll (target) {
  var link = target.getAttribute("href");
  var dist = document.getElementById("project").offsetTop;

  var speed = 1;
  currentpos=window.pageYOffset+dist;
  console.log(currentpos);
  window.scroll(0,currentpos);
  console.log(dist);
}

var section = document.getElementsByClassName('section');
var page = document.querySelector('.page');

window.onresize = function(event) {
  resize()
};

function resize(){
  if (window.innerWidth > 680) {

    for (var i = section.length - 1; i >= 0; i--) {
      section[i].style.height = ' '+page.offsetWidth / 1.9297+'px';
    }
  } else if(window.innerWidth < 680){
    for (var i = section.length - 1; i >= 0; i--) {
      section[i].style.height = ' '+page.offsetWidth * 2.012+'px';
    }
  }else{
    for (var i = section.length - 1; i >= 0; i--) {
      section[i].style.height = 'inherit';
    }
  }
}


resize();
