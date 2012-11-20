var count = 10, score = 0;
var show_timer, hidden_text, check_ans, user_ans;
var question_array = new Array();
var answer_array = new Array();
var test_question = document.getElementById('ques');
var text_result = document.getElementById('result');
var show_score = document.getElementById('score');
var next_button = document.getElementById("nextbutton");
var timer = document.getElementById('timer');
var wrong_ans = 0, unattempted_ques = 0;
var correct_string = new Array();
var label1 = document.getElementById('text1');
var label2 = document.getElementById('text2'); 
var label3 = document.getElementById('text3');
var show_answers = document.getElementById('show');
var current = 0;


function next_question() {

  label1.innerHTML = "Question: ";
  label2.innerHTML = "Answer: ";
  text_result.style.display = "block";
  next_button.value = "Next";
  text_result.disabled = false;

  
  clearInterval(show_timer);
  set_timer();

  text_result.value = "";
  var popped_question = question_array[current];
   
  if(popped_question) {
    test_question.innerHTML = popped_question;
  }
  else {
    score_page();
  }
}

function submit_answer() {

  user_ans = text_result.value;
  check_ans = answer_array[current];

  if (check_ans == user_ans) {
    score = score + 1;
    show_answers.innerHTML = "Your Score:" + score;
  }
  else if (user_ans == "") {
    unattempted_ques = unattempted_ques + 1;
    correct_string.push("Question no " + (current+1) + "-->" + question_array[current] + " -->Correct Answer: " + answer_array[current]);
    show_answers.innerHTML = "Your Score:" + score;
  }
  else {
    wrong_ans = wrong_ans + 1;
    correct_string.push("Question no " + (current+1) + "-->" + question_array[current] + " -->Correct Answer: " + answer_array[current]);
    show_answers.innerHTML = "Your Score:" + score;
      
  }
  current++;
  next_question();
}
    
function cleartimer() {

  count = count - 1;
  timer.innerHTML = 'Time Left: ' + count + 'seconds';
  if (count == 0) {
    clearInterval(show_timer);
    timer.innerHTML = 'Time Left: ' + ' 0seconds';
    score = score + 0;
    unattempted_ques = unattempted_ques + 1;
    text_result.disabled = true;
    
  }
  
}

function set_timer () {

  count = 10;
  show_timer = setInterval(function() { cleartimer()},1000);
}

function question() {

  var score = 0;
  var ques_string = "";
  var operators = ["+" , "-" , "*" , "/"];
  var op_length = 1;
  var random_string = '';
  var random_operator;
  
  for (var i = 0; i < 20; i++) {   
    random_operator = Math.floor((Math.random() * 10) % 4);
    ques_string = Math.floor(Math.random() * 20 ) + operators[random_operator] + Math.floor((Math.random() * 20) + 1);
    hidden_text = eval(ques_string);
    question_array.push(ques_string);
    answer_array.push(hidden_text);
    ques_string = "";
  }
  
}

function score_page() {

  var newvalue;
  
  label1.innerHTML = "Test Completed!";
  
  test_question.innerHTML = "Correct answers: " + score;  
  label2.innerHTML =  "Incorrect answers: " + wrong_ans;
  label3.innerHTML = "Unattempted Questions: " + unattempted_ques;
  
  text_result.style.display = "none";
  timer.style.display = "none";
  next_button.style.display = "none";
  
  for (var i = 0; i < correct_string.length; i++) {
    newvalue = document.createTextNode(correct_string[i]);
    var line_break = document.createElement("br");
    document.body.appendChild(line_break);
    document.body.appendChild(newvalue);
  
    
  }
}
question();
next_question();

