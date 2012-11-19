var number = "";
function equals() {
  if(form1.textfield.value == "")
  {
    return;
  }
  try {
    form1.textfield.value = eval(form1.textfield.value);
  }
  catch(exception) {
    form1.textfield.value = "Error";
  }
}
function sign() {
  form1.textfield.value = '(-' + form1.textfield.value + ')';
}
function mem_add() {
  if (number == "") {
    number = number + form1.textfield.value;
    form1.textfield.value = "";
  }
  else {
    number = number + '+' + form1.textfield.value;
    form1.textfield.value = "";
  }
}
function mem_subtract() {
  if (number == "") {
    number = number + form1.textfield.value;
    form1.textfield.value = "";
  }
  else {
    number = number + '-' + '(' + form1.textfield.value + ')';
    form1.textfield.value = "";
  }
  
}
function mem_get() {
  form1.textfield.value = number;
}
function mem_clear() {
  number = "";
  form1.textfield.value = number;
}