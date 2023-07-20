const questions = ["1+1","2+2","3+3","4+4","5+5","6+6","7+7","8+8","9+9","10+10+"]; //question

const answers = ["2","4","6","8","10","12","14","16","18","20"]; //answers

function quiz(){  //quiz function
    let correctAnswers = 0; //declared number of correct answers

    for(i = 0; i < 4; i++){
        const random = Math.floor(Math.random() * questions.length); //Math.random() * question.length returns a random integer from 0 to 10 since the length of question is 10.
        const yourAnswer = prompt(questions[random]); //creates an object for your answers and asks the user a random question with the random object.

        if(yourAnswer == answers[random]){
            correctAnswers++; //if your answer is = an answer in the the answers array then add 1 to your correct answer 
            alert("Correct");
        } else {
            alert("Incorrect, the answer is" + answers[random]); //else print the correct answer from the answers array
        }
    }
    alert("you got" +correctAnswers + "correct"); //print the number of correct answer you got
}

quiz();

