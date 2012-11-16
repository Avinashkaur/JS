function initial() {
  var textfield1 = document.getElementById("text1");
  var textfield2 = document.getElementById("text2");
    
  textfield1.onchange = function() {
    var pattern = /^(\-?\d+)(\.\d+)?$/;
    if (pattern.test(textfield1.value)) {
      textfield2.value = "true";
      //button.disabled = false;
    }
    else {
      textfield2.value = "false";
      //button.disabled = true;
    }
  }
}
function validate() {
  var myForm = document.forms[0];
  var textfield1 = document.getElementById("text1");
  var textfield2 = document.getElementById("text2");
  var pattern = /^(\-?\d+)(\.\d+)?$/;

  if (pattern.test(textfield1.value)) {
      // textfield2.value = "true";
      myForm.submit();
      //return true;
    }
  else {
    alert("Form cannot be submitted");
    return false;
    
  } 
  //myForm.submit();
}