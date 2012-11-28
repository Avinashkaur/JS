var number = "", clear_value = 0;
var display_screen = document.getElementById('textfield');
display_screen.disabled = true;
function check_op(sign) {
  var present_op = "";
  present_op = display_screen.value.substr((display_screen.value.length-1),display_screen.value.length);
  if (present_op == '+' || present_op == '-' || present_op == '*' || present_op == '/') {
    display_screen.value = display_screen.value.replace(present_op,"");
    display_num(sign);
    clear_value = 0;
  }
  else {
    display_screen.value = eval(display_screen.value);
    clear_value = 0;
    display_num(sign);
  }
}
function display_num(num) {
  try {
    var num_regex = /\d+/;
    if(clear_value == 1 && num_regex.test(num)) {
      display_screen.value = "";
      clear_value = 0;
    }
    if ((display_screen.value) && (display_screen.value != "Error") && (display_screen.value != "Infinity")) {
      display_screen.value = display_screen.value + num;
    } 
    else {
      display_screen.value = num;
    }
    if (num == 'clear') {
      display_screen.value = "";
    }
  }
  catch (exception) {
    display_screen.value = "";
  }
}
function equals() {
  if(display_screen.value == "") {
    return;
  }
  try {
    display_screen.value = eval(display_screen.value);
    clear_value = 1;
  }
  catch(exception) {
    display_screen.value = "Error";
  }
}
function sign() {
  display_screen.value = '(-' + display_screen.value + ')';
}
function mem_add() {
  if (number == "") {
    number = number + display_screen.value;
    display_screen.value = "";
  }
  else {
    number = number + '+' + display_screen.value;
    display_screen.value = "";
  }
}
function mem_subtract() {
  if (number == "") {
    number = number + display_screen.value;
    display_screen.value = "";
  }
  else {
    number = number + '-' + '(' + display_screen.value + ')';
    display_screen.value = "";
  }
}
function mem_get() {
  display_screen.value = number;
}
function mem_clear() {
  number = "";
  display_screen.value = number;
}