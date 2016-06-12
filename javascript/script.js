'use strict';

//Checkbox
$('input[type="checkbox"]').on('click', checkBox);

function checkBox() {
  if($('input[type="checkbox"]').prop('checked') == true) {
    $('#check-val').html('true');
  }
  else if($('input[type="checkbox"]').prop('checked') == false) {
    $('#check-val').html('false');
  }
}

//Radio
$('input[type="radio"]').on('click', pressOne);
$('input[type="radio"]').on('click', pressTwo);
$('input[type="radio"]').on('click', pressThree);

function pressOne() {
  if($('input[value="one"]:checked').val()) {
    $('#radio').html('One');
  }
}

function pressTwo() {
  if($('input[value="two"]:checked').val()) {
    $('#radio').html('Two');
  }
}

function pressThree() {
  if($('input[value="three"]:checked').val()) {
    $('#radio').html('Three');
  }
}

//Text
$('input[type="text"]').on('blur', textEnter);

function textEnter() {
  var userInput = $('input[type="text"]').val();
  if($('input[type="text"]').val()) {
    $('#text-enter').html(userInput);
  }
}