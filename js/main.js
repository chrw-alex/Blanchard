



// Swiper

const swiper = new Swiper('#swiper', {
  // Optional parameters
  direction: 'horizontal',
  effect: "fade",
  speed: 3000,

  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  loop: true,
  keyboard: {
    enabled: true,
  },
});


// Intro Dropdown

let dropdown_toggle = document.querySelectorAll('.dropbtn');
let dropdown_menu = document.querySelectorAll('.dropdown-content');

function dropdown_click(e) {
  e.preventDefault();
  // Закрыть предыдущее открытое меню
  let active = document.querySelector(".dropdown-content.show");
  if (active && active !== this.nextElementSibling) active.classList.remove("show");

  this.nextElementSibling.classList.toggle('show');
}

for (let i = 0; i < dropdown_toggle.length; i++) {
  dropdown_toggle[i].addEventListener('click', dropdown_click);
}

// разворот иконки
$(".dropbtn").click(function (event) {
  $(this).children().toggleClass("rotate");
});




// GallerySwiper


var gallerySwiper = new Swiper(".mySwiperGallery", {
  // slidesPerView: 3,
  // spaceBetween: 50,
  // slidesPerGroup: 3,
  //loop: true,

  loopFillGroupWithBlank: true,


  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // 320-768
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    // mobile + tablet - 600-1024
    431: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    // desktop > 1024
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  }
})


// Choices

const element = document.querySelector('#select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  dataSelectText: '',
});


// Gallery Filter Select

var filter_select_el = document.querySelector('.gallery-filter');
var items_el = document.querySelector('.gallery__swipper-wrapper');

filter_select_el.onchange = function () {
  console.log(this.value);
  var items = items_el.getElementsByClassName('gallery__swiper-slide');
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains(this.value)) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }
  gallerySwiper.update(true);
};


// Gallery Filter Check


$('.check').change(function () {
  const values = $('input:checked', this).get().map(n => n.dataset.filter);
  $('.gallery__swiper-slide').each((i, n) => $(n).toggle(!values.length || values.includes(n.dataset.category)));
  gallerySwiper.update(true);
}).change();



// Modals

document.addEventListener('click', function (e) {
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  let $target = e.target;
  if ($target.closest('[data-toggle="modal"]')) {
    e.preventDefault();
    $target = $target.closest('[data-toggle="modal"]');
    document.querySelector($target.dataset.target).classList.add('open');
    document.body.style.overflow = 'hidden';

  } else if ($target.dataset.close === 'modal') {
    e.preventDefault();
    $target.closest('.modal').classList.remove('open');
    document.body.style.overflow = 'visible';

  }
});



// Tabs accordion

document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (event) {
    const path = event.currentTarget.dataset.path

    document.querySelectorAll('.tab__content').forEach(function (tabContent) {
      tabContent.classList.remove('tab__content-active')
    })
    document.querySelector(`[data-target = "${path}"]`).classList.add('tab__content-active')
  })
})

// Tabs text

document.querySelectorAll('.text__btn').forEach(function (textBtn) {
  textBtn.addEventListener('click', function (event) {
    const path = event.currentTarget.dataset.path

    document.querySelectorAll('.catalog__text').forEach(function (catalogText) {
      catalogText.classList.remove('catalog__text-active')
    })
    document.querySelector(`[data-text-target = "${path}"]`).classList.add('catalog__text-active')
  })
})



// Tabs artists
document.querySelectorAll('.artists__btn').forEach(function (artistsBtn) {
  artistsBtn.addEventListener('click', function (event) {
    const path = event.currentTarget.dataset.path

    document.querySelectorAll('.artist__description').forEach(function (artistDescription) {
      artistDescription.classList.remove('artist__description-active')
    })
    document.querySelector(`[data-target = "${path}"]`).classList.add('artist__description-active')
  })
})

// Добавление класса по клику

$('.tabs__btn').on('click', function () {
  $('.tabs__btn').removeClass('tabs__btn-active');
  $(this).addClass('tabs__btn-active');
});


// Accordion

$(function () {
  $("#accordion-france").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false,
  });

  $("#accordion-germany").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false,
  });
  $("#accordion-italy").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false,
  });
  $("#accordion-russia").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false,
  });
  $("#accordion-belgium").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false,
  });
});

// Artists

$('.artists__btn').on('click', function () {
  $('.artists__btn').removeClass('artists__btn-active');
  $(this).addClass('artists__btn-active');
});



// Events load-more



const laptop = window.matchMedia('(min-width: 992px)')

if (laptop.matches) {
  $(function () {
    $(".events__item").slice(0, 3).show();
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".events__item:hidden").slice(0, 3).slideDown();
      if ($(".events__item:hidden").length == 0) {
        $("#loadLess").fadeIn('slow');
        $("#loadMore").hide();
        // $("#loadMore").text('Load only the first 3');
      }
    });

    $("#loadLess").on('click', function (e) {
      e.preventDefault();
      $('.events__item:not(:lt(3))').fadeOut();
      $("#loadMore").fadeIn('slow');
      $("#loadLess").hide();
    });

  });
}

// Define the query
const media = window.matchMedia('(max-width: 991px)')


if (media.matches) {
  $(function () {
    $(".events__item").slice(0, 2).show();
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".events__item:hidden").slice(0, 2).slideDown();
      if ($(".events__item:hidden").length == 0) {
        $("#loadLess").fadeIn('slow');
        $("#loadMore").hide();
        // $("#loadMore").text('Load only the first 3');
      }
    });

    $("#loadLess").on('click', function (e) {
      e.preventDefault();
      $('.events__item:not(:lt(2))').fadeOut();
      $("#loadMore").fadeIn('slow');
      $("#loadLess").hide();
    });
  });
}

const mobile = window.matchMedia('(max-width: 577px)')


if (mobile.matches) {
  $(function () {
    $(".events__item").slice(0, 1).show();
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".events__item:hidden").slice(0, 1).slideDown();
      if ($(".events__item:hidden").length == 0) {
        $("#loadLess").fadeIn('slow');
        $("#loadMore").hide();
        // $("#loadMore").text('Load only the first 3');
      }
    });

    $("#loadLess").on('click', function (e) {
      e.preventDefault();
      $('.events__item:not(:lt(1))').fadeOut();
      $("#loadMore").fadeIn('slow');
      $("#loadLess").hide();
    });
  });


  let dropdownPubl = document.querySelectorAll('.publ__dropbtn');
  let dropdownPublContent = document.querySelectorAll('.publ__dropdown-content');

  function dropdown_click(l) {
    l.preventDefault();
    let activeP = document.querySelector(".publ__dropdown-content.show-publ");
    if (activeP && activeP !== this.nextElementSibling) activeP.classList.remove("show-publ");

    this.nextElementSibling.classList.toggle('show-publ');
  }

  for (let i = 0; i < dropdownPubl.length; i++) {
    dropdownPubl[i].addEventListener('click', dropdown_click);
  }

  // разворот иконки
  $(".publ__dropbtn").click(function (event) {
    $(this).children('.publ__dropbtn-icon').toggleClass("rotate");
  });
}

const smallMobile = window.matchMedia('(max-width: 430px)')
if (smallMobile.matches) {
  $(function () {
    $(".events__item").slice(0, 5).show();

  });

  var eventsSwiper = new Swiper(".events__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    //loop: true,

    pagination: {
      el: ".swiper-pagination",
    },

  })

}



//  Tooltip

tippy('#tooltip-1', {
  content: 'Подсказка 1',
  duration: 300,
  theme: 'blanchard',
});

tippy('#tooltip-2', {
  content: 'Подсказка 2',
  duration: 300,
  theme: 'blanchard',
});



// Publications Swiper

var publSwiper = new Swiper(".publ__swiper", {
  // slidesPerView: 3,
  // spaceBetween: 50,
  // slidesPerGroup: 3,
  //loop: true,

  loopFillGroupWithBlank: true,


  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // 320-576
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    // mobile + tablet - 576-1024
    431: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    // desktop > 1024
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  }
})


// Publications Check Filter 

$('.publ__check').change(function () {
  const values = $('input:checked', this).get().map(n => n.dataset.filter);
  $('.publ__swiper-slide').each((i, n) => $(n).toggle(!values.length || values.includes(n.dataset.category)));
  publSwiper.update(true);
}).change();


// Partners Swiper

var partnersSwiper = new Swiper(".partners__swiper-container", {
  // slidesPerView: 3,
  // spaceBetween: 50,
  // slidesPerGroup: 3,
  //loop: true,

  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".partners__swiper-button-next",
    prevEl: ".partners__swiper-button-prev",
  },
  breakpoints: {
    // 320-600
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    // mobile + tablet - 600-1024
    600: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 1,
    },
    // desktop > 1024
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  }
})


//  Mask

var selector = document.getElementById("tel");

var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);


//  Validation

const validation = new JustValidate('#form', {
  errorFieldCssClass: 'is-invalid',

  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    fontSize: '12px',
    color: '#D11616',
  },
  focusInvalidField: true,
  lockForm: true,

  errorContainer: '.errors-container',
});

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Введите имя',
    },
    {
      rule: 'customRegexp',
      value: '[a-zA-ZА-Яа-яЁё\s]+',
      errorMessage: 'Введите корректное имя',
    },
  ])

  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Введите телефон',
    },
    {
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
      errorMessage: 'Введите корректный номер',
    },
  ]);


// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76, 37.64],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14,
  });
  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map-point.svg',
    iconImageSize: [20, 20],
    //iconImageOffset: [-30, -40]
  });
  myMap.geoObjects.add(myPlacemark);
}




// Search Mobile


$('.search-mobile__button').on('click', function (y) {
  if ($('.search-mobile__input').hasClass('search-mobile__input-active')) {
    $('.search-mobile__input').removeClass('search-mobile__input-active');
  } else {
    $('.search-mobile__input').addClass('search-mobile__input-active');
  }
  y.preventDefault();
});


jQuery(function ($) {
  $(document).mouseup(function (z) { // событие клика по веб-документу
    var input = $(".search-mobile__input"); // тут указываем ID элемента
    if (!input.is(z.target) // если клик был не по нашему блоку
      && input.has(z.target).length === 0) { // и не по его дочерним элементам
      input.removeClass('search-mobile__input-active'); // скрываем его
    }
  });
});

// Burger


$('.burger').on('click', function () {
  $('.menu').addClass('menu-active');
});

$('.menu__close').on('click', function (k) {
  $('.menu').removeClass('menu-active');
  k.preventDefault();
});



// закрытие модального окна при клике вне его
// $(document).on('keyup', function(e) {
// 	if ( e.key == "Escape" ) {
// 		$( "#popup" ).hide();
// 	}
// });


