
function initial() {
  var myForm = document.forms[0];
  var goButton = myForm.button1;
  goButton.disabled = true;
  myForm.loginname.focus();
}
function validation() {
  var myForm = document.forms[0];
  for (var i = 0; i < document.forms[0].elements.length; i++) {
    var selected_field = document.forms[0].elements[i];
    if (selected_field.type == "text") {
      // console.log(selected_field.name);
      if ((selected_field.value == "") || (selected_field.value == null)) {
        alert("You cannot leave "+selected_field.name+" blank.");
        return false;
      }
    } 
  }
  var form_textarea = myForm.tArea;
  var minLength = form_textarea.value.length;
  if ((form_textarea.value.trim() == "") || (form_textarea.value == null)) {
    alert("Please write something in 'About Me'");
    return false;
  }
  if (minLength < 50) {
    alert("You cannot enter text less than 50 characters");
    form_textarea.focus();
    return false;

   
  }
  //return false;
  //myForm.submit();
}
function check_text() {
  var myForm = document.forms[0];
  var form_textarea = myForm.tArea;
  var minLength = form_textarea.value.length;
  if (minLength < 50) {
    alert("You cannot enter text less than 50 characters");
    form_textarea.focus();
  }
}

//validating email address
function valid_email() {
  var myForm = document.forms[0];
  var emailadd = myForm.emailid.value;
  var atpos = emailadd.indexOf('@');
  var dotpos = emailadd.lastIndexOf('.');
  if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= emailadd.length) {
    alert("Not a valid e-mail address");
    myForm.emailid.focus();
    myForm.emailid.value = "";
  }
}
function enable_button(chk_box) {
  var goButton = document.getElementById("button1");
  if(chk_box.checked == true) {
    goButton.disabled = false;
  }
  if (chk_box.checked == false) {
    goButton.disabled = true;
  }
}
