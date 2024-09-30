// main.js
import $ from 'jquery';
import LocomotiveScroll from 'locomotive-scroll';

$(document).ready(() => {
  
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });


  scroll.on('call', (func) => {
    if (func === 'fadeIn') {
      $('.fadeIn').addClass('is-revealed');
    }
  });

  scroll.update();

});