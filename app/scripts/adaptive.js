// Module name
var adaptive = (function() {

  // Initializes module
  var init = function() {
    _setUpListners();
    orderElements();

  };

  // Listen for the event
  var _setUpListners = function () {
    $(burger).on('click', _showNavigation);
    $(window).resize(orderElements);
  };


  var screenXS = 480, //мобильная
      screenSM = 768, //планшет
      screenMD = 992,
      screenLG = 1200;

  var navigationMenu = $('.navigation'),
      mobileNav = $('.mobile-nav'),
      burger = $('.burger'),
      sidebar = $('.sidebar'),
      contactsBlock = $('.contacts'),
      contactsBody = $('.contacts__body'),
      container = $('.main .container'),
      main = $('.main'),
      headerSocials = $('.header__socials'),
      socials = $('.socials'),
      footer = $('.footer');

  //Функция-манипуляций с DOM
  var orderElements = function () {

    //Манипуляции с DOM для блока навигации
    if (window.innerWidth <= screenSM) {
      navigationMenu.insertAfter(headerSocials);
      navigationMenu.hide();
    }
    if (window.innerWidth > screenSM) {
      sidebar.prepend(navigationMenu);
      navigationMenu.show();
    }

    //Манипуляции с DOM для блока контактов
    if (window.innerWidth <= screenSM) {
      contactsBody.insertAfter(main);
    }
    if (window.innerWidth > screenSM) {
      contactsBlock.append(contactsBody);
    }

    //Манипуляции с DOM для блока соц. иконок
    if (window.innerWidth <= screenXS) {
      socials.insertBefore(footer);
    }
    if (window.innerWidth > screenXS) {
      headerSocials.append(socials);
    }

  };

  //Показать спрятанное навигационное меню
  var _showNavigation = function (ev) {
    // ev.preventDefault();

    $(this).toggleClass('active');
    navigationMenu.toggle();

  };

  // Return the object (public methods)
  return {
    init: init
  };

})();

adaptive.init();