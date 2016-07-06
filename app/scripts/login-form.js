// Module name
var loginForm = (function() {

    // Initializes module
  var init = function() {
    _setUpListners();
  };

    // Listen for the event
  var _setUpListners = function () {
    $('#login-form').on('submit', _submitForm);
  };

  var _submitForm = function (ev) {
    console.log('_submitForm: Отправка формы');
    ev.preventDefault();

    var form = $(this),
      url = '',
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

loginForm.init();