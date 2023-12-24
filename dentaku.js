$(document).ready(function () {
  var currentInput = '0';
  var Equal = '0';

  $('#display').val('0');

  $('input').click(function () {
    var clickedValue = $(this).val();
    var clickedClass = $(this).attr('class');
    var lastChar = currentInput.slice(-1);

    if (clickedValue === 'AC') {
      currentInput = '0';
      return $('#display').val('0');
    } else if (clickedValue === '=') {
      currentInput = String(eval(currentInput));
      $('#display').val(currentInput);
      Equal = '1';
    } else {
      if (clickedClass === 'btn number' && currentInput == '0' && clickedValue != '.'){
        currentInput = '';
      }
      if (clickedClass === 'btn number' && Equal === '1' && !lastChar.match(/[+\-*/,.]/)) {
        currentInput = '';
        Equal = '0';
      }
      if (lastChar === '.' && clickedValue === '.') {
        return;
      } else if (
        (lastChar === '/' || lastChar === '*' || lastChar === '-' || lastChar === '+') &&
        (clickedValue === '/' || clickedValue === '*' || clickedValue === '-' || clickedValue === '+')
      ) {
        return;
      }
      currentInput += clickedValue;
    }

    $('#display').val(currentInput);
  });
});