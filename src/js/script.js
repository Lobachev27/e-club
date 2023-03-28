/*Выпадающее меню*/

(function(){
  'use strict';

  class Component {

    printError(error) {

      if (typeof error !== 'string' || error.length === 0) {
        return console.log('you did not give arguments');
      }

      return console.log(error);
    }

    toggleСlass(node, className) {
      return  node.classList.toggle(className);
    }
  }

  class Menu extends Component {

    constructor(settings) {
      super();
      this.menuNode = settings.menuNode;
    }

    toggleMenuState(className) {

      if (typeof className !== 'string' || className.length === 0){
        return super.printError('you did not give the class name for the toggleState function');
      }

      return super.toggleСlass(this.menuNode, className);
    }
  }

  let jsMenuNode = document.querySelector('body');

  let demoMenu = new Menu ({
    menuNode: jsMenuNode
  });

  function callMenuToggle() {
    demoMenu.toggleMenuState('js-menu_activated');
  }

  $('.js-menu__toggle').click(function () {
    callMenuToggle();
  });
})();

/*Главный слайдер*/

$(document).ready(function() {
  var swiperIntro = undefined;
  function initSwiper() {
    var screenWidth = $(window).width();
    if (swiperIntro == undefined) {
      swiperIntro = new Swiper(".intro > .swiper-container", {
        loop: true,
        autoplay: {
          delay: 3000
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        grabCursor: true,
        effect: "fade",
        speed: 500,
        autoHeight: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        pagination: {
          el: ".intro .swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".intro .swiper-button-next",
          prevEl: ".intro .swiper-button-prev"
        },
      });
    } else if (swiperIntro != undefined) {
      swiperIntro = undefined;
    }
  }

  initSwiper();

  $(window).on("resize", function () {
    initSwiper();
  });
});

/*Слайдер клубная атмосфера*/

$(document).ready(function() {
  var total =  $(".atmosphere__slider .swiper-slide").length;
  $(".atmosphere__slider-total").text("/ 0" + total + ".");

  console.log(total);

  var swiperAtmosphere = new Swiper(".atmosphere .swiper-container", {
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 20,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".atmosphere .swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".atmosphere .swiper-button-next",
      prevEl: ".atmosphere .swiper-button-prev",
    },
    breakpoints: {
      1399: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,
      },
      1199: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,
      },
    },
  });

  swiperAtmosphere.on("slideChangeTransitionEnd", function() {
    var slideActiveIndex = swiperAtmosphere.realIndex + 1;

    $(".atmosphere__slider-number").text("0" + slideActiveIndex + ".");
  });
});

/*Слайдер с тренерами*/

$(document).ready(function() {
  var swiperTrainer = new Swiper(".trainers__slider .swiper-container", {
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 20,
    autoHeight: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    pagination: {
      el: ".trainers__slider .swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".trainers__slider .swiper-button-next",
      prevEl: ".trainers__slider .swiper-button-prev"
    },
    breakpoints: {
      1639: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      1199: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,
      },
    }
  });
});

/*Табы расписания*/

$(document).ready(function() {
  $(function () {
    var tabContainers = $('.schedule__wrapper');
    tabContainers.hide().filter(':first').show();
    $('.schedule__tab').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.schedule__tab').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':first').click();
  });

});

/*Табы блога*/

$(document).ready(function() {
  $(function () {
    var tabContainers = $('.blog__wrapper');
    tabContainers.hide().filter(':first').show();
    $('.blog__tab').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.blog__tab').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':first').click();
  });

});

/*Google maps*/

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.6257665, lng: 37.3041006},
    zoom: 15,
    styles: [
      {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "saturation": 36
          },
          {
            "color": "#000000"
          },
          {
            "lightness": 40
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#000000"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#e5c163"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#c4c4c4"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#e5c163"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 21
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#e5c163"
          },
          {
            "lightness": "0"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#e5c163"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 18
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#575757"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#2c2c2c"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#999999"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 17
          }
        ]
      }
    ]
  });
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(55.6257802, 37.3062002),
    map: map,
    title: 'e.club',
    icon: {
      url: "/img/map-marker-big.png",
      scaledSize: new google.maps.Size(32, 48)
    }
  });
}

window.initMap = initMap;

/*Модальные окна*/

$(document).ready(function() {
  $('.js-popup').click(function(e){
    e.preventDefault();
    $('.popup').removeClass('show');
    var id = $(this).attr('href');
    $(id).addClass('show');
    $('body').addClass('ov-hid');
  });

  $('.popup__close').click(function(){
    $(this).closest('.popup').removeClass('show');
    $('body').removeClass('ov-hid');
  });

  $(document).mouseup(function (e){
    var el = $(".popup__wrapper");
    if (!el.is(e.target) && el.has(e.target).length === 0) {
      el.closest('.popup').removeClass('show');
      $('body').removeClass('ov-hid');
    }
  });
});
