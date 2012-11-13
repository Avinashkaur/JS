
function initial() {
  var oForm = document.forms[0];
  var goButton = oForm.button1;
  goButton.disabled = true;
  oForm.loginname.focus();
}
function validation() {
  var oForm = document.forms[0];
  for (var i = 0; i < document.forms[0].elements.length; i++) {
    var oField = document.forms[0].elements[i];
    if (oField.type == "text") {
      // console.log(oField.name);
      if ((oField.value == "") || (oField.value == null)) {
        alert("You cannot leave "+oField.name+" blank.");
      }
    } 
  }
  var oTextarea = oForm.tArea;
  if ((oTextarea.value == "") || (oTextarea.value == null)) {
    alert("Please write something in 'About Me'");
  }
  return false;
  oForm.submit();
}
function check_text() {
  var oForm = document.forms[0];
  var oTextarea = oForm.tArea;
  var minLength = oTextarea.value.length;
  if (minLength < 50) {
    alert("You cannot enter text less than 50 characters");
    oTextarea.focus();
  }
}

//validating email address
function valid_email() {
  var oForm = document.forms[0];
  var emailadd = oForm.emailid.value;
  var atpos = emailadd.indexOf('@');
  var dotpos = emailadd.lastIndexOf('.');
  if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= emailadd.length) {
    alert("Not a valid e-mail address");
    oForm.emailid.focus();
    oForm.emailid.value = "";
  }
}
function enable_button(chk_box) {
  var eButton = document.getElementById("button1");
  if(chk_box.checked == true) {
    eButton.disabled = false;
  }
  if (chk_box.checked == false) {
    eButton.disabled = true;
  }
}
