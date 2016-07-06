var myModule = (function() {
  
  // Инициализирует js модуль
  var init = function() {
    _setUpListners();
  };

  // Прослушивает события
  var _setUpListners = function () {
    $('.thumbnail__site-preview_plate-add-site').on('click', _showModal); //открыть модальное окно
    $('#add-new-project').on('submit', _addProject); //add project
  };

  // Работает с модальным окном
  var _showModal = function (ev) {
    ev.preventDefault();

    var divPopup = $('#new-project-popup'),
        form = divPopup.find('.form');

    divPopup.bPopup({
      speed: 650,
      transition: 'slideDown',
      onClose: function () {
        form.find('.server-mes').text('').hide();
        form.trigger('reset');
      }
    });
  };

  // Добавляет проект
  var _addProject = function (ev) {
    ev.preventDefault();

    var form = $(this),
        url = 'add-project.php',
        serverAnswer = _ajaxForm(form, url);

    if (serverAnswer) {
      serverAnswer.done(function(ans) {

        var successBox = form.find('.success-mes'),
            erorBox = form.find('.error-mes');

        if (ans.status === 'ok') {
          erorBox.hide();
          successBox.text(ans.text).show();
        }else{
          successBox.hide();
          erorBox.text(ans.text).show();
        }
      });
    }
   };

  // Универсальная функция
  // Для ее работы используется
  // @form - форма
  // @url - адресс php файла, к которому обращаемся
  // 1. Собирает данные из формы
  // 2. Проверяет форму
  // 3. Делает запрос на сервер и возвращает ответ с сервера
  var _ajaxForm = function (form, url) {
    
    if (!validation.validateForm(form)) return false;

    var data = form.serialize();

    var result = $.ajax({
                    url: url,
                    type: 'POST',
                    dataType: 'json',
                    data: data,
                  })
                  .fail(function (ans) {
                    console.log('Проблемы в PHP');
                    form.find('.error-mes').text('На сервере произошла ошибка').show();
    });
    return result;
  }

  // Возвращаем объект (публичные методы)
  return {
    init: init
  };

})();

myModule.init();