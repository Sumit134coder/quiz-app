var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score=0;
console.log(chalk.yellow('QUIZ ON THE BOYS(amazon prime)'));
var userName = readlineSync.question('ENTER YOUR NAME FOR THE QUIZ \n ');
console.log(chalk.red.bold('welcome, '+userName.toUpperCase() +' to the quiz'));
console.log("quiz is about to start:\n");
var quiz =
[
  {
    question: "1. Is THE BOYS series about good supheroes or company owned supes?\n a- good supheroes\n b-company owned supes\n",
    answer :'b'
  },
  {
    question: "2. why HUGHIE seeks revenge?\n a- his dog got killed\nb-his mother got killed by supes\nc-girlfriend got killed by supe\nd-just for fun\n",
    answer :'c'
  },
  {
    question: "3. who killed HUGHIE girlfriend?\na- A-TRAIN\nb-homelander\nc-queen maeve\nd-translucent\n",
    answer :'a'
  },
  {
    question: "4. HUGHIE worked at a?\na- pizza shop\nb-stero shop\nc- burger king\nd- family business\n",
    answer :'b'
  },
  {
    question:"5. Who kills translucnet?\na- Homelander\nb-HUGHIE\nc- butcher\nd- frenchie\n",
    answer:'b'
  },
  {
    question:"6. who owns vought?\na- Stan edgar\nb- maedilyn stilwell\nc- homelander\nd- government owned\n",
    answer:'a'
  },
  {
    question:"7. butcher's main nemesis--\na- A-train\nb-edgar\nc- hughie\nd-homelander\n",
    answer:'d'
  }
]



function checkAnswer(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase()===answer.toLowerCase())
  {
    console.log(chalk.green.bold('that is the right answer'));
    score=score+1;
  }
  else
  {
    console.log(chalk.red.bold('wrong answer\n'));
  }
} 
for(var i=0;i<quiz.length;i++)
{
    checkAnswer(quiz[i].question,quiz[i].answer);
}

console.log('----------------------------------------------------');
console.log(chalk.green.bold('your final score out of 7 is '+score));