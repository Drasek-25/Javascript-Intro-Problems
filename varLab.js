// Write the code to solve the following problems.
// For each of the following, use window.prompt() to get user input.
// After getting each one right, "comment it out" so that when you
// refresh you don't have to keep typing things in!

// 1. Even or Odd

// Prompt the user for a number
// If the number is even print "even"
// If the number is odd print "odd"
////////////////////////////////////////////////MY ANSWER//////////////////////////////////////////////////

let num = prompt('Please provide a number');

if (num % 2 == 0) {
    console.log('even');
} else {
    console.log('odd');
}

////////////////////////////////////////////////END OF ANSWER//////////////////////////////////////////////

// 2. Sum numbers from the user
// Prompt the user to enter two numbers, then show their sum.

////////////////////////////////////////////////MY ANSWER//////////////////////////////////////////////////

let num = prompt('Please provide a number');
let num2 = prompt('Please provide a second number');
let answer = parseFloat(num) + parseFloat(num2)
alert(answer)

////////////////////////////////////////////////END OF ANSWER//////////////////////////////////////////////

// 3. A random number from min to max

// The built-in function Math.random() creates a random value from 0 to 1 (not /// including 1).

// Write a function random(min, max) to generate a random floating-point number // from min to max (not including max).

// Examples of its work:

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

////////////////////////////////////////////////MY ANSWER//////////////////////////////////////////////////

alert(randomFloat(1, 5));

function randomFloat(min, max)   {
    return (Math.random() * (max - min) ) + min;
}

////////////////////////////////////////////////END OF ANSWER//////////////////////////////////////////////

// 4. A random integer from min to max

// Create a function randomInteger(min, max) that generates a random integer
// from min to max, including both min and max as possible values.

// Any number from the interval min..max must appear with the same probability.

// Examples of its work:

// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5

// You can use the solution of the previous task as the base.

////////////////////////////////////////////////MY ANSWER//////////////////////////////////////////////////

alert(randomInt(1, 5));

function randomInt(min, max)  {
    return Math.floor(Math.random() * (max - min) ) + min;
}

////////////////////////////////////////////////END OF ANSWER//////////////////////////////////////////////

// 5. Uppercase the first character

// Write a function ucFirst(str) that returns the string str with the
// uppercased first character, for instance:

// ucFirst("john") == "John";
// !== string does not work

////////////////////////////////////////////////MY ANSWER//////////////////////////////////////////////////

const word = prompt('Please provide a word');

if (typeof word !== 'string'){
    alert('no, no no, give me a word!')
}
else if (typeof word == 'string'){
    const wordCapitalized = word.charAt(0).toUpperCase() + word.slice(1);
    alert(wordCapitalized)
}

////////////////////////////////////////////////END OF ANSWER//////////////////////////////////////////////

// 6. Check for spam

// Write a function checkSpam(str) that returns true if str contains ‘viagra’
// or ‘XXX’, otherwise false.

// The function must be case-insensitive:

////////////////////////////////////////////////MY ANSWER//////////////////////////////////////////////////

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

let email = prompt('Email text goes here');
let check = email.toLowerCase();
let spamFilter = ['viagra', 'xxx'];
let numberOfTests = spamFilter.length;
let counter = 0;
let spam = false;

for (; numberOfTests > 0; numberOfTests-- ){
    if (check.search(spamFilter[counter]) !== -1){
        alert('Spam Detected!');
        spam = true;
        break;
    }
    counter++;
}
if (spam !== true){
    alert('All Clear!');
}

////////////////////////////////////////////////END OF ANSWER//////////////////////////////////////////////

// 7. Truncate the text

// Create a function truncate(str, maxlength) that checks the length of the str
// and, if it exceeds maxlength, truncates the string to make its length equal
// to maxlength.

// The result of the function should be the truncated (if needed) string.

// For instance:

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to tel"
// truncate("Hi everyone!", 20) = "Hi everyone!"

////////////////////////////////////////////////MY ANSWER//////////////////////////////////////////////////

alert(truncate("What I'd like to tell on this topic is:", 20));

function truncate(str, maxLength)   {
    if (str.length > maxLength){
        return str.substring(0, maxLength);
    }

}

////////////////////////////////////////////////END OF ANSWER//////////////////////////////////////////////

// 8. Extract the money

// We have a cost in the form "$120". That is: the dollar sign goes first, and
// then the number.

// Create a function extractCurrencyValue(str) that would extract the numeric
// value from such string and return it

// 9. The List

// Big Gary's job is to make sure that the club only lets in the "best" class of clientele.
// Prompt the user for:
// - their age
// - their income
// - if they are a celebrity ("yes" or "no")
// - if they are wearing sneakers ("yes" or "no")

// If Big Gary let's you in, he prints: "*nod*"
// If he doesn't let you in, he prints: "You're not on the list."

// You are not allowed in if:
//   - you are under 18 or over 35.
//   - you have an income under 100,000.
//   - you are wearing sneakers.

// Otherwise you are let in. However, there are some exceptions, you will also be let in if:
//   - you are over 16 and a celebrity.
//   - you are over 16 and your income is over 5,000,000.
//   - you are under 25 (and over 18), you have an income over 250K, but are wearing sneakers.

// The test cases are as follows:
// list order: age[0], money, celeb, shoes
//          age[0]money[1]celeb[2]shoes[3]

// Rare
// 15, 100K, y, n - N
// 16, 100K, y, n - Y
// 16, 4.9M, n, n - N
// 16, 5M, n, n - Y
// 17, 250K, n, y - N
// 25, 250K, n, y - N
// 20, 250K, n, y - Y
// 20, 249K, n, y - N

// Age
// 17, 100K, n, n - N
// 18, 100K, n, n - Y
// 35, 100K, n, n - N
// 34, 100K, n, n - Y

// Income
// 20, 99K, n, n - N
// 20, 100K, n, n - Y

// Shoes
// 20, 100K, n, y - N


////////////////////////////////////////////////MY ANSWER//////////////////////////////////////////////////

alert('running');
let person = [15, 100000, true, false];

if ((person[0] >= 16) && (person[2] === true)) {
  alert('*nod*');
} else if ((person[0] >= 16) && (person[1] >= 500000)) {
  alert('*nod*');
} else if ((person[0]) <= 25) && (person[0] >= 18) && (person[3] === true)) {
  alert('*nod');
} else if ((person[0] >= 35) || (person[0] < 17) || (person[1] < 100000) || (person[3] === true)) {
  alert("You're not on the list");
} else {
  alert('*nod*');
}

////////////////////////////////////////////////END OF ANSWER//////////////////////////////////////////////
