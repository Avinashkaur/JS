
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
  var emailAdd = oForm.emailid.value;
  var reEmail = /^(?:\w+\.?)*\w+@(?:\w+\.?)*\w+$/;
  if(reEmail.test(emailAdd) == false){
    alert("Not a valid e-mail address");
    oForm.emailid.focus();
    oForm.emailid.value = "";
  }
}

//validating URL
function valid_url() {
  var oForm = document.forms[0];
  var url = oForm.homepage.value;
 // var url = document.getElementById("url").value;
  var pattern = /(ftp|http|https|gopher):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  if (!(pattern.test(url))) {
    alert("Url is not valid");
    return false;
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
