//Chapter 1
alert("After a gap year, you decide to enter the real world and apply to Sparta Global Online...");

var application = prompt("Will you swipe lie in application or tell the truth?: (1)Truth (2)Lie");

if (application === '1'){
  alert("Lets hope the truth is good enough for Sparta Globals high standards");
}else {
alert("You have now entered a life of lies...");
throw ("Error");
}


//Chapter 2

alert("Ring...Ring...Ring...you wake up wondering who the hell is ringing at 11am...He answers the phone, its a Woman called Beth who wants to tell you that your application was successful, and you will be invited to a Sparta Day.")

var phone = prompt("Do you accept?: (1)Yes (2)No (3)Why are you calling so early!? ");

if (phone === '1'){
  alert("Glad to hear! make sure you dress smart and bring your A game");
}else if (phone === '2') {
  alert("That is a shame, a person of your high caliber is highly needed at our company! I beg you please!");

}else{
  alert("How rude!");
  throw "RiskyFoodError";
}

//chapter 3

var day = prompt("Today is the day, the Sparta Day, Have you dressed smart, on time, and feel prepared? (Enter true or false)");

alert("Do you think you participated enough and answered the questions well?")
var effort = prompt("What will you say? (Type yes or no)");

if(day == true || effort === 'yes'){
  alert("You may be in the chance of a place at Sparta, But first you need to do a test!");
}else {
  alert("GAME OVER");
  throw ("Error");
}

//Chapter 4
alert("You recieve an email with the dreaded psychometric tests")
var practice = prompt("Do you practice online before doing the test?: (1)Yes (2)No");
var time = parseInt(prompt("Out of 20, how many minutes on average did it take you to do test?"));

if(practice === '1' && time <= 12){
alert("You may have a chance of passing!");
}else{
alert("It's not looking good, better start appling for other jobs!");
throw ("Error");
}

//Chapter 5
alert("Ring..Ring..Ring..you recieve a phonecall, and the person who interviewd you answers the phone to tell you how the interview went.")
var verdict = prompt("She tells you the verdict: (1)Verdict 1 (2)Verdict 2(3)Verdict 3 (4)Verdict 4");

switch(verdict){
case '1': alert("You recieved over 80% in the test and answered questions well, we are offering you a job!");
break;
case '2': alert("You did well in the test however you didn't participate as much as we'd like to see in the day, good luck with the job hunting!");
break;
case '3': alert("Thanks for applying but we think you'd be better suited somewhere else!");
break;
case '4': alert("Sorry, but you were terrible, maybe have a think about a change in career.");
break;
default: alert("You tried your best!");
}
