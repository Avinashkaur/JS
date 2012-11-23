var number = "";
var display_screen = document.getElementById('textfield');
function display_num(num) {
  try {
    if ((display_screen.value != "Error") && (display_screen.value != "Infinity")) {
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
