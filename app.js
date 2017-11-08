'user strict'
var Name = prompt ('Please state your name')
console.log('name', Name);

if (Name) {
  alert ('Welcome'+' '+Name+'. '+'Let\'s play a trivia game to get to know me! Please answer yes or no to the following questions.')
  console.log('true', Name);
}
var Language = prompt ('Do I speak 3 languages?').toLowerCase();
console.log('languages', Language);
if (Language === 'yes' || Language === 'y') {
  alert ('That is correct, I speake Arabic, English and Tigrinia.')
  console.log('true', Language);
}
 else if (Language === 'no' || Language === 'n') {
   alert ('I actually do speak 3 languages. I speak Arabic, English, and Tigrinia')
   console.log('false', Language);
 }
var Sibilings = prompt ('Do you believe I have 6 sisters?').toLowerCase();
console.log('sibilings', Sibilings);
if (Sibilings === 'no' || Sibilings === 'n') {
  alert ('You\'re right '+Name+', I have 7 sisters and 1 brother.')
  console.log('true', Sibilings);
} else if (Sibilings === 'yes' || Sibilings === 'y') {
  alert ('I\'m sorry, that\'s wrong '+Name+'. I have 7 sisters and 1 brother.')
  console.log('false', Sibilings);
}
var Birthday = prompt ('Is today (Nov. 7) my birthday?').toLowerCase();
console.log('birthday', Birthday);
if (Birthday === 'yes' || Birthday === 'y') {
  alert ('It really is!')
  console.log('true', Birthday);
} else if (Birthday === 'no' || Birthday === 'n') {
  alert ('It actually is my birthday!')
  console.log('false', Birthday);
}
var BirthPlace = prompt ('Was I born in America?').toLowerCase();
console.log('birthplace', BirthPlace);
if (BirthPlace === 'yes' || BirthPlace === 'y') {
  alert ('Sure is! Born in the ole U S of A!')
  console.log('true', BirthPlace);
} else if (BirthPlace === 'no' || BirthPlace === 'n') {
  alert ('AWW, that was incorrect '+Name+'. I was born right here in Seattle, WA.')
  console.log('false', BirthPlace);
}
var Color = prompt ('Is my favorite color orange?').toLowerCase();
console.log('color', Color);
if (Color === 'no' || Color === 'n') {
  alert('You\'re right '+Name+'! My favorite color is GREEN.')
  console.log('false', Color);
} else if (Color === 'yes' || Color === 'y') {
  alert('No '+Name+', my favorite color is GREEN')
  console.log('true', Color);
}
