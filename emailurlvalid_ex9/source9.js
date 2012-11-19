function initial() {
  var myForm = document.getElementById('form1');
  var goButton = myForm.button1;
  goButton.disabled = true;
  myForm.loginname.focus();
}
function validation() {
  var myForm = document.getElementById('form1');
  for (var i = 0; i < myForm.length; i++) {
    var selected_field = myForm.elements[i];
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
var emailadd = myForm.emailid.value;
var pattern = /^(?:\w+\.?)*\w+@(?:\w+\.?)*\w+$/;
  if (!(pattern.test(emailadd))) {
    alert("Not a valid e-mail address");
    myForm.emailid.focus();
    return false;
  }

  //validating URL
  var myForm= document.getElementById('form1');
  var url = myForm.homepage.value;
  var pattern = /((ftp|http|https|gopher):\/\/)?((www)\.)?(\w+)(\.)(\w*)(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i;
  //var pattern1 = /((ftp|http|https|gopher):\/\/)?((www)\.)?(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  if (!(pattern.test(url))) {
    alert("Url is not valid");
    return false;
  }

}
function check_text() {
  var myForm = document.getElementById('form1');
  var form_textarea = myForm.tArea;
  var minLength = form_textarea.value.length;
  if (minLength < 50) {
    alert("You cannot enter text less than 50 characters");
    form_textarea.focus();
  }
}

//validating email address
// function valid_email() {
//   var myForm = document.getElementById('form1');
//   var emailadd = myForm.emailid.value;
//   var pattern = /^(?:\w+\.?)*\w+@(?:\w+\.?)*\w+$/;
//   if (!(pattern.test(emailadd))) {
//     alert("Not a valid e-mail address");
//     myForm.emailid.focus();
//   }
// }
function enable_button(chk_box) {
  var goButton = document.getElementById("button1");
  if(chk_box.checked == true) {
    goButton.disabled = false;
  }
  if (chk_box.checked == false) {
    goButton.disabled = true;
  }
}
//validating URL
// function valid_url() {
//   var myForm= document.getElementById('form1');
//   var url = myForm.homepage.value;
//   var pattern = /((ftp|http|https|gopher):\/\/)?((www)\.)?(\w+)(\.)(\w*)(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i;
//   //var pattern1 = /((ftp|http|https|gopher):\/\/)?((www)\.)?(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
//   if (!(pattern.test(url))) {
//     alert("Url is not valid");
//     return false;
//   }
// }