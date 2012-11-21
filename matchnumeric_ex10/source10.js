var myForm = document.getElementById("form1");
var textfield1 = document.getElementById("text1");
var textfield2 = document.getElementById("text2");
var pattern = /^([+-]?\d+([eE]\+?\-?\d+)?)(\.\d+)?$/;
function validate() {
  if (pattern.test(textfield1.value)) {
    textfield2.value = "true";
    myForm.submit();
  }
  else {
    textfield2.value = "false";
    alert("Form cannot be submitted");
    return false;
  }
}
  