// Module name
var contactMe = (function() {
  
  // Initializes module
  var init = function() {
    _setUpListners();
  };

  // Listen for the event
  var _setUpListners = function () {
    $('#contact-me').on('submit', _submitForm);
  };
  
  // Отправка формы
  var _submitForm = function (ev) {
    console.log('_submitForm: Отправка формы');
    ev.preventDefault();

    var form = $(this),
        url = 'contact-me.php',
        defObj = _ajaxForm(form, url);

    // Что то делаем с ответом с сервера defObj

  }

  // Ajax запрос с проверкой
  var _ajaxForm = function (form, url) {
      console.log('_ajaxForm: Ajax запрос с проверкой');
      if (!validation.validateForm(form)) return false;
    };

  // Return the object (public methods)
  return {
    init: init
  };

})();

contactMe.init();