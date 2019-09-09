function KaprekarsConstant(num) {
  var convString = num.toString();
  var sortAsc = convString.split('').sort().join('');
  var sortDesc = convString.split('').sort().reverse().join('');
  var final = eval(sortDesc) - eval(sortAsc);
  var fourDigits = [];
  var fourDigitsString = '';
  document.write('final ' + final + '<br>');
  var count = 1;

  function repeat(number) {
    convString = number.toString();

    if (convString.length < 4) {
      addZeros(convString);
      convString = fourDigitsString;
    }
    sortAsc = convString.split('').sort().join('');
    sortDesc = convString.split('').sort().reverse().join('');
    final = eval(sortDesc) - eval(sortAsc);
    document.write('final ' + final + '<br>');
    count++;
    if (final !== 6174) {
      repeat(final);

    }
  }

  function addZeros(withoutZero) {
    fourDigits = withoutZero.split('');
    fourDigits.push('0');
    fourDigitsString = fourDigits.join('');
    if (fourDigitsString.length !== 4) {
      addZeros(fourDigitsString);
    } else {
      return fourDigitsString;
    }
  }

  if (final !== 6174) {
    repeat(final);
  }
  document.write('Total Count ' + count);
}

// keep this function call here 
KaprekarsConstant('2144');