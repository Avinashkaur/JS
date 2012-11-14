function prompt_box() {
  var message = "";
  var fName = " ",lName = " ";
  while ((fName == null) || ((fName = fName.trim()).length == 0)) {
    fName = prompt("Enter your first name" , "");
    message = "Hi " + fName;
   
  }
 
  while ((lName == null) || ((lName = lName.trim()).length == 0)) {
    lName = prompt("Enter your last name" , "");
    
  }
  message += " " + lName;
  document.write(message);
}

  
