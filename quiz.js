

function check1(){
var count=0;						// variable for couting the time
var q1= document.quiz.question1.value;				// variable for taking the input value of question1
var q2= document.quiz.question2.value;						//variable for taking the input value of question2
var q3= document.quiz.question3.value;				//variable for taking the input value of question3

var q4= document.quiz.question4.value;						// variable for taking the input value of question4

var q5= document.quiz.question5.value;			//variable for taking the input value of question5
if(q1=="5") { count++;}							// for  counting
if(q2=="1") { count++;}
if(q3=="3") { count++;}

if(q4=="4") { count++;}

if(q5=="2") { count++;}

// it will check score and accoding to it , it will show output


document.write(count);
}


// countdown timer function
function check8(){

var timeLeft = 30;
var elem = document.getElementById("some_div");
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

function doSomething() {
    document.write('Stop! you can not attempt now');
	check1();
}

}

