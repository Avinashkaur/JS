function initial() {
  var textfield1 = document.getElementById("text1");
  var textfield2 = document.getElementById("text2");
  var button = document.getElementById("submitform");
 // button.disabled = true;
  
  textfield1.onchange = function() {
    var pattern = /^\d+(\.\d+)?$/;
    if (pattern.test(textfield1.value)) {
      button.disabled = false;
    }
    else {
      textfield2.value = "false";
      //button.disabled = true;
    }
  }
}
function validate() {
  var oForm = document.forms[0];
  var EventUtil = new Object();
  var textfield1 = document.getElementById("text1");
  var textfield2 = document.getElementById("text2");
  var pattern = /^\d+(\.\d+)?$/;
  //var oEvent = EventUtil.getEvent();
  if (pattern.test(textfield1.value)) {
      textfield2.value = "true";
      oForm.submit();
      //return true;
    }
  else {
    alert("form cannot be submitted");
    return false;
    
  } 
}