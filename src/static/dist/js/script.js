"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(r){var o={};function n(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=r,n.c=o,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===_typeof(e)&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="./src/static/js/script.js")}({"./src/static/js/script.js":function srcStaticJsScriptJs(module,exports){eval("\n\n//# sourceURL=webpack:///./src/static/js/script.js?")}});
//# sourceMappingURL=script.js.map



/* ##SLIDER## */

const items = document.querySelectorAll('.slider-show > img');
const slideNbr = items.length;
const next = document.querySelector('#btn-next');
const prev = document.querySelector('#btn-prev');
let count = 0;

// next img
function nextSlide() {
    items[count].classList.remove('active');
    if (count < slideNbr - 1) {
        count++;
    } else {
        count = 0;
    }
    items[count].classList.add('active')
}

next.addEventListener('click', nextSlide)

// prev img

function prevSlide() {
    items[count].classList.remove('active')
    if(count > 0) {
        count--;
    } else {
        count = slideNbr - 1;
    }
    items[count].classList.add('active')
}

prev.addEventListener('click', prevSlide)

// automatic slider show

setInterval(nextSlide, 6000)



/* ##DISPLAY MENU## */

const bugerbtn = document.querySelector('.burger-menu')
const nav = document.querySelector('.nav-menu')

bugerbtn.addEventListener('click', function() {
    if(!nav.classList[1]) {
        nav.classList.add('show-nav')
    } else {
        nav.classList.remove('show-nav')
    }
})

/* ##HANDLE SCROLL DISCOVER BUTTON## */

const firststep = document.getElementById('first-step');
const discoverbtn = document.getElementById('discover-btn');
const header = document.getElementsByTagName('header');
console.log(header[0])
const topbtn = document.getElementById('up-to-top');

function handleScroll() {
    firststep.scrollIntoView({behavior: "smooth"});
  }

  discoverbtn.addEventListener('click', handleScroll);

// back to the top
function backToTop() {
    scrollTo({behavior: 'smooth', top:0})
  }

  topbtn.addEventListener('click', backToTop);
  

/* ##ANIM DIV ON SCROLL## */

function animDiv(id) {
    let target = document.getElementById(id)
    let {scrollTop, clientHeight} = document.documentElement
    let topElementToTopViewport = target.getBoundingClientRect().top;
    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.9) {
        target.classList.add('slide-active')
    }
    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed()) {
        document.getElementById('up-to-top').classList.remove('hide-btn')
    }
    if(scrollTop < 100) {
        document.getElementById('up-to-top').classList.add('hide-btn')
    }
 }
  
window.addEventListener('scroll', () => {
    const target = ['text-1', 'text-2', 'img-1', 'img-2', 'bg-img-1', 'bg-img-2', 'noel-offer', 'newyear-offer', 'box-offer'];
    target.forEach(element => {
        animDiv(element)
    });
 })

  

