'user strict';

var score = 0;

var Name = prompt ('Please state your name');
console.log('name', Name);
if (Name) {
  alert ('Welcome'+' '+Name+'. '+'Let\'s play a trivia game to get to know me! Please answer yes or no to the following questions.');
  console.log('true', Name);
}


var Language = prompt ('Do I speak 3 languages?').toLowerCase();
console.log('languages', Language);
if (Language === 'yes' || Language === 'y') {
  alert ('That is correct, I speake Arabic, English and Tigrinia.');
  console.log('true', Language);
  score++;
}
else if (Language === 'no' || Language === 'n') {
  alert ('I actually do speak 3 languages. I speak Arabic, English, and Tigrinia');
  console.log('false', Language);
}


var Sibilings = prompt ('Do you believe I have 6 sisters?').toLowerCase();
console.log('sibilings', Sibilings);
if (Sibilings === 'no' || Sibilings === 'n') {
  alert ('You\'re right '+Name+', I have 7 sisters and 1 brother.');
  console.log('true', Sibilings);
  score++;
} else if (Sibilings === 'yes' || Sibilings === 'y') {
  alert ('I\'m sorry, that\'s wrong '+Name+'. I have 7 sisters and 1 brother.');
  console.log('false', Sibilings);
}

var Birthday = prompt ('Is November 7th my birthday?').toLowerCase();
console.log('birthday', Birthday);
if (Birthday === 'yes' || Birthday === 'y') {
  alert ('It really is!');
  console.log('true', Birthday);
  score++;
} else if (Birthday === 'no' || Birthday === 'n') {
  alert ('It actually is my birthday!');
  console.log('false', Birthday);
}


var BirthPlace = prompt ('Was I born in America?').toLowerCase();
console.log('birthplace', BirthPlace);
if (BirthPlace === 'yes' || BirthPlace === 'y') {
  alert ('Sure is! Born in the ole U S of A!');
  console.log('true', BirthPlace);
  score++;
} else if (BirthPlace === 'no' || BirthPlace === 'n') {
  alert ('AWW, that was incorrect '+Name+'. I was born right here in Seattle, WA.');
  console.log('false', BirthPlace);
}


var Color = prompt ('Is my favorite color orange?').toLowerCase();
console.log('color', Color);
if (Color === 'no' || Color === 'n') {
  alert('You\'re right '+Name+'! My favorite color is GREEN.');
  console.log('true', Color);
  score++;
} else if (Color === 'yes' || Color === 'y') {
  alert('No '+Name+', my favorite color is GREEN');
  console.log('false', Color);
}


var Numbers = prompt ('Can you guess my favorite number? You get 4 guesses!');
if (Numbers === parseInt(Numbers, 7)) {
  alert ('You guessed right!');
  score++;
  console.log('true', Numbers);
  score++;
}
var counter = 1;
while (Numbers !== '7' && Numbers !== null && counter !== 4) {
  if (Numbers >= 8) {
    alert ('That\'s too high.');
    Numbers = prompt ('Please try again.');
    console.log('false', Numbers);
  } else if (Numbers <= 6) {
    alert ('That\'s too low.');
    Numbers = prompt ('Please try again.');
    console.log('false', Numbers);
  }
  counter++;
}
console.log('counter change', counter);
alert ('The correct answer is LUCKY 7!');

var Country = ['ethiopia','germany','egypt','britain'];
console.log('counrty', Country);
for (var i=0; i<6; i++) {
  var CountryInput =  prompt ('I have visited four different countries. Can you guess one of them?').toLowerCase();
  if (Country.includes(CountryInput)) {
    alert ('You guessed right! The countries I\'ve been to are Ethiopia, Egypt, Britain anf Germany.');
    console.log('true', Country);
    score++;
    break;
  } else {
    alert ('I\'ve never been there. Please try again.');
    console.log('false', Country);
    while (i===5) {
      alert('You didn\'t get any right :(. The correct countries are Ethiopia, Germany, Egypt and Britain. Thank you for playing');
      break;
    }
  }
}
alert('Congratulations '+Name+', you got '+score+' out of 7!');
