var count = 10, score = 0, current_question = 0, wrong_ans = 0, unattempted_ques = 0, total_questions = 10, JSONarray = [];
var show_timer, user_ans, line_break, newvalue;
var test_question = document.getElementById('ques');
var text_result = document.getElementById('result');
var show_score = document.getElementById('score');
var next_button = document.getElementById("nextbutton");
var timer = document.getElementById('timer');
var ques_label = document.getElementById('queslabel');
var ans_label = document.getElementById('anslabel'); 
var unattempted_label = document.getElementById('unattemptedlabel');
var show_answers = document.getElementById('show');
ques_label.innerHTML = "Question: ";
ans_label.innerHTML = "Answer: ";
next_button.value = "Next";
function next_question() {
  text_result.disabled = false;
  reset_timer();
  text_result.value = "";
  if (current_question < total_questions) {
    test_question.innerHTML = JSONarray[current_question].operand1 + JSONarray[current_question].operator + JSONarray[current_question].operand2;
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
  JSONarray[current_question].useranswer = user_ans;
  if (JSONarray[current_question].testanswer == parseFloat(user_ans , 10).toFixed(2)) {
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
  if ((count <= 10) && (count > 0)) {
    count = count - 1;
    timer.innerHTML = "Time Left: " + count + " seconds";
  }
  else if (count == 0) {
    clearInterval(show_timer);
    submit_answer();
    text_result.disabled = true;
    next_question();
  }
}
function question() {
  score = 0;
  var operators = ["+" , "-" , "*" , "/"];
  var random_operator;
  for (var i = 0; i < total_questions; i++) {  
    var operand_1 = getRandomNumber();
    random_operator = Math.floor((Math.random() * 10) % 4);
    var operand_2 = getRandomNumber();
    JSONarray[i] = {  "operand1" : operand_1 ,
                      "operator" : operators[random_operator] ,
                      "operand2" : operand_2 ,
                      "testanswer" : "" , 
                      "useranswer" : "0"
                   };
    var correct_answer = parseFloat(eval(JSONarray[i].operand1 + JSONarray[i].operator + JSONarray[i].operand2), 10).toFixed(2);
    JSONarray[i].testanswer = correct_answer;
  }
}
function display_score() {
  ques_label.innerHTML = "Test Completed!";
  test_question.innerHTML = "Correct answers: " + score;  
  ans_label.innerHTML =  "Incorrect answers: " + wrong_ans;
  unattempted_label.innerHTML = "Unattempted Questions: " + unattempted_ques;
  text_result.style.display = "none";
  clearInterval(show_timer);
  timer.style.display = "none";
  next_button.style.display = "none";
  for (var i = 0; i < JSONarray.length; i++) {
    line_break = document.createElement("br");
    document.body.appendChild(line_break);
    var resultstring = "Question no " + (i+1) + "-->  " + JSONarray[i].operand1 + JSONarray[i].operator + JSONarray[i].operand2 + "---------You answered: " + JSONarray[i].useranswer + "  " + "-->Correct Answer: " + JSONarray[i].testanswer;
    newvalue = document.createTextNode(resultstring)
    document.body.appendChild(newvalue);
  }
}
function getRandomNumber() {
  return Math.floor((Math.random() * 20) + 1 );
}
question();
next_question();