import * as bootstrap from 'bootstrap';
import Typed from 'typed.js';
import './style.scss';
import ScrollReveal from 'scrollreveal';
import 'waypoints/lib/noframework.waypoints'


var options = {
  strings: ['Food ...', 'Drinks...'],
  typeSpeed: 40,
  loop:true,
  backDelay:500,
  backSpeed:50,
};

var typed = new Typed('.element', options);

var toDown = {
  distance: '50px',
  origin: 'top',
  interval:100,
  duration:1000,

  
};

ScrollReveal().reveal('.to-down', toDown);

var toRight = {
  distance: '50px',
  origin: 'left',
  interval:100,
  duration:1000,

  
};

ScrollReveal().reveal('.to-right', toRight);

var toLeft = {
  distance: '50px',
  origin: 'right',
  interval:100,
  duration:1000,

  
};

ScrollReveal().reveal('.to-left', toLeft);


// var waypoint = new Waypoint({
//   element: document.getElementById('about'),
//   handler: function(direction) {

//     let oldNavLink =document.querySelector('.nav-link.active');
//     oldNavLink.classList.remove('active');
//     let currentNavLink = document.getElementById('about');
//     currentNavLink.classList.add('active');
//   },
//   offset: "25%"
// })

const menuLists= [
  {
    id:1,
    image:'public/img/img/plate1.png',
    title:'Barbaecue Salad',
    description:'Special Delicious Dish',
    currency:'$',
    price:'22.9'
  },
  {
    id:2,
    image:'public/img/img/plate2.png',
    title:'Spinach Salad',
    description:'Special Delicious Dish',
    currency:'$',
    price:'30.50'
  },
  {
    id:3,
    image:'public/img/img/plate3.png',
    title:'Salad with fish',
    description:'Special Delicious Dish',
    currency:'$',
    price:'50'
  }
]
let menuRow =document.getElementById('menuRow')


menuLists.forEach(function(menus){
  let div = document.createElement('div');
  div.classList.add('col-8','col-md-4','col-lg-3');
  div.innerHTML= `
        <div class="card mb-5">
            <img src=${menus.image} class="card-img w-75 mx-auto d-block my-4" alt="">
            <div class="card-body">
              <p class="fw-semibold">${menus.title}</p>
              <p class="text-black-50">${menus.description}</p></p>
              <div class="d-flex justify-content-between align-items-center">
                <span class="text-black-50">${menus.currency} ${menus.price}</span>
                <a href="#" class="btn btn-primary"><i class="bi bi-cart"></i></a>
              </div>
            </div>
          </div>
      `;
      menuRow.append(div);
})




