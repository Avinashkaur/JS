var count = 10, score = 0, current_question = 0, total_questions = 10;
var show_timer, check_ans, user_ans, line_break;
var test_question = document.getElementById('ques');
var text_result = document.getElementById('result');
var show_score = document.getElementById('score');
var next_button = document.getElementById("nextbutton");
var timer = document.getElementById('timer');
var label1 = document.getElementById('text1');
var label2 = document.getElementById('text2'); 
var label3 = document.getElementById('text3');
var show_answers = document.getElementById('show');
var wrong_ans = 0, unattempted_ques = 0;
label1.innerHTML = "Question: ";
label2.innerHTML = "Answer: ";
text_result.style.display = "block";
next_button.value = "Next";
var JSONarray = [];

function next_question() {
  text_result.disabled = false;
  reset_timer();
  text_result.value = "";
  if (current_question < total_questions) {
    var popped_question = JSONarray[current_question].testquestion;
    test_question.innerHTML = popped_question;
  }
  else {
    display_score();
  }
}
function reset_timer() {
  clearInterval(show_timer);
  count = 10;
  show_timer = setInterval(function() { cleartimer()},1000);
}
function submit_answer() {
  user_ans = text_result.value.trim();
  check_ans = JSONarray[current_question].testanswer;
  JSONarray[current_question].useranswer = user_ans;
  
  if (check_ans == parseFloat(user_ans).toFixed(2)) {
    score = score + 1;
  }
  else if (user_ans == "") {
    unattempted_ques = unattempted_ques + 1;
  }
  else {
    wrong_ans = wrong_ans + 1;
  }
  show_answers.innerHTML = "Your Score: " + score;
  current_question++;
  next_question();
}
function cleartimer() {
  count = count - 1;
  timer.innerHTML = "Time Left: " + count + "seconds";
  if (count == 0) {
    clearInterval(show_timer);
    timer.innerHTML = "Time Left: 0seconds";
    unattempted_ques = unattempted_ques + 1;
    submit_answer();
    text_result.disabled = true;
    next_question();
  }
}
function question() {
  var score = 0;
  var ques_string = "";
  var operators = ["+" , "-" , "*" , "/"];
  var random_operator;
  for (var i = 0; i < total_questions; i++) {   
    random_operator = Math.floor((Math.random() * 10) % 4);
    ques_string = randomize_number() + operators[random_operator] + randomize_number();
    var correct_answer = eval(ques_string);
    JSONarray[i] = { "testquestion" : ques_string , "testanswer" : parseFloat(correct_answer).toFixed(2) , "useranswer" : parseFloat(correct_answer).toFixed(2)};
    ques_string = "";
  }
}
function display_score() {
  var newvalue;
  label1.innerHTML = "Test Completed!";
  test_question.innerHTML = "Correct answers: " + score;  
  label2.innerHTML =  "Incorrect answers: " + wrong_ans;
  label3.innerHTML = "Unattempted Questions: " + unattempted_ques;
  text_result.style.display = "none";
  timer.style.display = "none";
  next_button.style.display = "none";
  for (var i = 0; i < JSONarray.length; i++) {
    line_break = document.createElement("br");
    document.body.appendChild(line_break);
    var resultstring = "Question no " + (i+1) + "-->  " + JSONarray[i].testquestion + "---------You answered: " + JSONarray[i].useranswer + "  " + "-->Correct Answer: " + JSONarray[i].testanswer;
    newvalue = document.createTextNode(resultstring)
    document.body.appendChild(newvalue);
  }
}
function randomize_number() {
  return Math.floor((Math.random() * 20) + 1 );
}
question();
next_question();