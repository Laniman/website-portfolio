var validation = (function() {
  
  // Инициализация
  var init = function() {
    _setUpListners();
  };

  // Прослушка событий
  var _setUpListners = function () {
    $('form').on('keydown', '.has-error', _removeError);
    $('form').on('reset', _clearForm);
  }

  // Удаляет класс оформления невалидного элемента
  var _removeError = function () {
    $(this).removeClass('has-error');
  };

  // Очтщает форму
  var _clearForm = function () {
    
    var form = $(this);
    
    form.find('input, .textarea').trigger('hideTooltip');
    form.find('.has-error').removeClass('has-error');
  };

  // Создает тултипы
  var _createQtip = function (element, position) {
    
    if (position === 'right') {
      position = {
        my: 'left center',
        at: 'right center'
      }
    }else{
      position = {
        my: 'right center',
        at: 'left center',
        adjust: {
          method: 'shift none'
        }
      }
    }

    element.qtip({
      content: {
        text: function () {
          return $(this).attr('qtip-content');
        }
      },
      show: {
        event: 'show'
      },
      hide: {
        event: 'keydown hideTooltip'
      },
      position: position,
      style: {
        classes: 'qtip-mystyle qtip-rounded',
        tip: {
          height: 10,
          width: 16
        }
      }
    }).trigger('show');
  };

  // Валидация формы
  var validateForm = function (form) {
    
    // CHEK ------
    console.log('validateForm: Валидация....');
    // -------------
    var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
        valid = true;

    $.each(elements, function (index, val){
      
      var element = $(val),
          val = element.val(),
          pos = element.attr('qtip-position');
      
      if (val.length === 0) {
        element.addClass('has-error');
        _createQtip(element, pos);
        valid = false;
      }

    });

    return valid;
  }



  // Возвращает объект с публичными методами
  return {
    init: init,
    validateForm: validateForm
  };

})();

validation.init();