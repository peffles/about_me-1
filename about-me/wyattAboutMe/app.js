'use strict';
var challengeAccptd = window.confirm('***ATTENTION!*** You have a pop quiz! about someone you know nothing about! (5 yes or no questions)');
var scaredBoy;
var getRekt;
var dogAns;
var colorAns;
var animalAns;
var fourthAns;
var fifthAns;
var numAns;
var tally = 0;
console.log('challengeAccepted:', challengeAccptd);

if (challengeAccptd == false) {
    scaredBoy = window.confirm('scared off by 5 questions?')
    console.log('scared:', scaredBoy);
    if (scaredBoy == true || scaredBoy == false) {
        getRekt = window.confirm('Wow! that hurts..... click OK to exit the site I guess...')
        if (getRekt == true) {
            alert('MUAHAHAHAHAHAHA YOU\'RE TAKING THAT QUIZ!');
            location.reload();
        }
    }
} else {
    // Dog question
    dogAns = prompt('Does Wyatt have a dog?');
    console.log('dogAnswer:', dogAns, dogAns.toUpperCase());
    if (dogAns.toUpperCase() === 'N' || dogAns.toUpperCase() === 'NO') {
        alert('Correct! He only has a cat, named puddy! (as in "I tot i taw a puddy tat")');
    } else {
        alert('incorrect im afraid... he does have a cat named Puddy though! (as in "I tot i taw a puddy tat")');
    }

    // Color
    colorAns = prompt('Is lime green is Wyatt\'s favorite color?')
    console.log('colorAnswer', colorAns, colorAns.toUpperCase());
    if (colorAns.toUpperCase() === 'N' || colorAns.toUpperCase() === 'NO') {
        alert('Correct! His favorite color is cyan.');
    } else {
        alert('incorrect! His favorite color is Cyan!');
    }

    // Favorite Animal
    animalAns = prompt('Is Wyatt\'s favorite animal Ailurus fulgens?')
    console.log('animalAnswer', animalAns, animalAns.toUpperCase());
    if (animalAns.toUpperCase() === 'Y' || animalAns.toUpperCase() === 'YES') {
        alert('Correct! His favorite animal is Ailurus fulgens aka the Red panda!, they\'re really cute but they are also endangered.');
        tally++;
    } else {
        alert('incorrect! His favorite animal is Ailurus fulgens aka the Red panda!, they\'re really cute but they are also endangered.');
    }

    // Horses
    fourthAns = prompt('Does Wyatt\'s family own a ranch in Oregon? with over 200 horses?')
    console.log('fourthAnswer', fourthAns, animalAns.toUpperCase());
    if (fourthAns.toUpperCase() === 'N' || fourthAns.toUpperCase() === 'NO') {
        alert('Correct! Actually, he is terrified of horses... This is not a joke, horses are right next to spiders in his book.');
        tally++;
    } else {
        alert('incorrect! Fun fact though, he is terrified of horses... This is not a joke, horses are right next to spiders in his book.');
    }

    // following along?
    fifthAns = prompt('Wyatt rides his horse Daisy every Saturday')
    console.log('fifthAnswer', fifthAns, fifthAns.toUpperCase());
    if (fifthAns.toUpperCase() === 'N' || fifthAns.toUpperCase() === 'NO') {
        alert('Correct!, You\'re actually paying attention!');
        tally++;
    } else {
        alert('tsk...tsk...tsk...');
    }
}
var sixGuessLimit = 4;
var sixGuessCount = 0;
var sixCorrectAnswer = Math.floor((Math.random() * 10)+ 1);
var currentAnswer;
while (sixGuessCount < sixGuessLimit && currentAnswer != sixCorrectAnswer) {
    currentAnswer = prompt('What is my favorite number?');
    console.log('currentAnswer', currentAnswer)
    sixGuessCount++;
    if (currentAnswer > sixCorrectAnswer) {
        alert('Your guess is too high! Guesses: ' + sixGuessCount);
    } else if (currentAnswer < sixCorrectAnswer) {
        alert('Your guess is too low! Guesses: ' + sixGuessCount);
    }
}
if (currentAnswer == sixCorrectAnswer) {
    alert('Thats Right! My favorite number is ' + sixCorrectAnswer);
    tally++;
}
if (sixGuessCount >= sixGuessLimit) {
    alert('Too many guesses!');
}
var sevCurrentAnswer;
var sevGuessLimit = 6;
var sevGuessCount = 0;
var sevCurrentAnswer = '';
while (sevGuessCount < sevGuessLimit && (sevCurrentAnswer != 'butterfinger' || sevCurrentAnswer != 'snickers')) {
    sevCurrentAnswer = prompt('What is one of my favoite candy bars?');
    console.log('currentAnswer', sevCurrentAnswer)
    if (sevCurrentAnswer === 'butterfinger' || sevCurrentAnswer === 'snickers') {
        alert('Thats Right! One of my favotite candy bars is: ' + sevCurrentAnswer);
        tally++;
        alert('QUESTIONS CORRECT: '+tally +' I think this is the last pop up.....');
    } else {
      alert('WRONG! Guesses: '+sevGuessCount);
    }
    sevGuessCount++;
}
if (sevCurrentAnswer != 'butterfinger' || sevCurrentAnswer != 'snickers') {
  alert('Thats incorrect! Butterfinger and Snickers would be accepted!');
}