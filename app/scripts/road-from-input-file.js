var roadFromInputFile = (function() {
  
  var init = function() {
    _setUpListners();
  };

  var _setUpListners = function () {
    $('#fileupload').change(_roadFromInputFile);
  };

  var _roadFromInputFile = function () {
    console.log($(this));
    var filename = $(this).val().replace(/.*\\/, '');
    console.log(filename);
    $('#fileurl').val(filename);
  }

  return {
    init: init
  };

})();

roadFromInputFile.init();