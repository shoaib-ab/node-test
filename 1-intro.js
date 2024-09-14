const luckyNumber = 12;
let choice = Math.ceil(Math.random() * 12);

if (choice === luckyNumber) {
  console.log('You won the lottery!');
} else console.log('Oops! better luck for next time!');

console.log('Your choice is: ' + choice);

console.log('Lucky number is: ' + luckyNumber);
