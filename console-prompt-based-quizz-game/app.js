// immediate function implementation : to keep our code private. So that even if it's used in diff project, no issue happens
(function(){

    function Question(question, possibleAnswers, correctAnswer){

        this.question = question;
        this.possibleAnswers = possibleAnswers;
        this.correctAnswer = correctAnswer;
    
    }
    
    Question.prototype.display = function(){
    
        let answerKeys = Object.keys(this.possibleAnswers);
        console.log(this.question);
        answerKeys.forEach((answerKey) => {
            console.log(answerKey + ' : ' + this.possibleAnswers[answerKey]);
        })
    
    }
    
    Question.prototype.checkCorrectness = function(givenOption, scoreChecker){
    
        let curScore;

        if(givenOption === this.correctAnswer){
            console.log('Correct!');
            curScore = scoreChecker(true);
        }
        else{
            console.log('Incorrect! Try again?');
            curScore = scoreChecker(false);
        }
        this.displayScore(curScore);
        gameInit();
    
    }

    Question.prototype.displayScore = function(score){

        console.log('---------------------------------');
        console.log('Your current score is : ' + score);
        console.log('---------------------------------');

    }
    
    let questions = [];
    
    questions.push(new Question('What\'s the capital of India?', 
                            {
                                0: 'Delhi',
                                1: 'Mumbai',
                                2: 'Chennai'
                            }, 0));
    questions.push(new Question('Who\'s the prime minister of India?', 
                            {
                                0: 'Nirav Modi',
                                1: 'Narendra Modi',
                                2: 'Aloo Modi'
                            }, 1));
    questions.push(new Question('What\'s my favorite programming language?', 
                            {
                                0: 'Javascript',
                                1: 'Java',
                                2: 'Python'
                            }, 0));
    questions.push(new Question('What comes after A?', 
                            {
                                0: 'Oi',
                                1: 'O',
                                2: 'B'
                            }, 2));
    questions.push(new Question('What\'s the smallest prime number?', 
                            {
                                0: 3,
                                1: 2,
                                2: 4
                            }, 1));
  
    function gameInit(){
    
        let selectedOption, curNo, input;
    
        curNo = Math.floor(Math.random() * questions.length);
        questions[curNo].display();
    
        input = prompt('Select the correct one from the options available to you.');
    
        if(input !== 'exit'){
    
            selectedOption = parseInt(input);
            if(selectedOption > 2 || selectedOption < 0){
                console.log('Invalid option! No point deducted...Try again?');
                gameInit();
            }
            else
                questions[curNo].checkCorrectness(selectedOption, scoreChecker);
          
        }else{
            console.log('-------------------');
            console.log('Thanks for playing!');
            console.log('-------------------');
        }
     
    }
    // implementing closure
    function scoreKeeper(){

        let score = 0;
        return function(checkVariable){

            if(checkVariable)
                score += 2;
            else
                score--;

            return score;

        }

    }

    let scoreChecker = scoreKeeper();
    alert('------------------\nWelcome to Funny Quiz game\n------------------\nYour current score : 0\n Correct answer : + 2\n Wrong Answer : -1\n Quit : type \'exit\'');
    gameInit();    

})();



