const myButton = document.getElementById('btn');
        myButton.onclick = function() {
           const name = prompt('Enter your full name.');
           document.getElementById('name').innerText = name;
        }


// variables
const pi = 3.142;
let name = 'Ruth Nyankum';
let age = 120;
let present = false;
console.log(name);


//  Objects
const car = {
    numberPlate: 'GR-345-24',
    model: 'Bugatti',
    color: 'army green',
    weight: 50,
    weightUnit: 'KG',
    owner: {
        name: 'Ruth Nyankum',
        driver: {
            name: 'Kwame',
            license: '',
        }
    }
}

console.log(car.numberPlate);
console.log(car.owner.driver.name);
console.log(car);


    car.model = 'Porche';
    console.log(car.model);

car.owner.driver.name = 'Elizabeth';
console.log(car.owner.driver.name);


// Array
const tweet1 = {
    text: 'I am learning js today.',
    likes: 5,
    shares: 2,
    retweets: 1
  }
  
  const tweet2 = {
    text: 'I am learning arrays today.',
    likes: 8,
    shares: 3,
    retweets: 0
  }
  
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets[1]
  
  // Date
  const today = new Date();
  today.toString();
  today.toLocaleDateString()
  today.getHours();
  
  // If/Else
  if (today.getHours() == 16) {
      console.log('Class has ended');
      } else {
        console.log('Class is in session!');
      }
  
  // For Loop
  for (let i = 0; i <= 10; i++) {
    console.log('Notify friends!', i);
  }

  // Functions
// Defining functions
function login(username, password) {
  if (username == 'Ruth' && password == '1234') {
    return 'User is logged in!';
  } else if ('username != Ruth') {
    return 'Invalid username!';
  } else if (password != '1234') {
    return 'Invalid password!';
  } {
    return 'Invalid username or password'
  }
}

// Invoking functions
login('Ruth', '1234');

// Basic Arithmetic
12 + 34;
15 - 16;
7 * 12;
78 / 4;
78 % 4;

// Comparison operators
2 === 2;
3 !== 2;
3 !== 3;

// Built-in Math functions
Math.round(37 / 24);
Math.floor(37 / 24);
Math.ceil(37 / 24);
Math.random();
Math.max(12, 14, 89);

// Order of operations
1 * 2 + 3 - 4 / 2 % 2**2;

// Handling user inputs
1200 + Number('250');

// String concatenation
const firstname = 'Ruth';
const lastname = 'Nyankum';
firstname.trim() + ' ' + lastname.trim();

// Template literal`
`${firstname.trim()} ${lastname.trim()}`;

// String methods
firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim()}`.length;
(firstname.trim() + ' ' + lastname.trim()).length;
firstname.toUpperCase();
lastname.toLowerCase();
lastname.charAt (1);
firstname.charAt (0);
`${firstname.trim().charAt(0)} ${lastname.trim().charAt(0)}`;

// String conversion
String(2014);


// Write a function that will add a participant to our Google Classroom
const participants = [];
function addParticipant (email) {
  // Check if email was provided
  if (!email) {
    return 'Email not provided';
  }
  // Check if email is valid
  if (!email.includes ('@')) {
    return 'Invalid email provided!';
  }
  // Add email to the participant
  // adding participant in an array requires.push
  participants.push(email);
  // Notify them via email
  // return response
  return 'Participant added!';
}

addParticipant('nana.nyankum99@gail.com');

// Arrays in JavaScript
// Arrays to string using join 
const alphabets = ['A', 'B', 'C',  'D'];
alphabets;
alphabets.join(' ');
alphabets.join(' ').split(' ');


// Write a function that will take a user with firstname, lastname and return fullname
// Declaring the function
const user = {
  firstname: 'Ruth',
  lastname: 'Ganner'
}
function fullname (user) {
  return {
    ...user,
    fullname: `${user.firstname} ${user.lastname}`
  }
}

fullname(user);


// Array map
const users = [
  {firstname: 'Linda', lastname:'Parker'},
  {firstname: 'Mark', lastname: 'Twaine'},
  {firstname: 'Oliver', lastname: 'Queen'},
  {firstname: 'Stephen', lastname: 'Grider'},
  {firstname: 'Stephen', lastname: 'Musk'}
]
users.map(fullname);

// Map and return squares of numbers
function square(number) {
  return number ** 2;
}
const numbers = [0,1,2,3,4,5]
numbers.map(square);

// Filter and return even numbers
function even (number) {
  return number % 2 === 0;
}

numbers.filter(even);



// Write a function that takes a user with name and dateOfBirth and returns true if their birthday is today else false

// const user = {
//   name: 'Nana',
//   dateOfBirth: '2000/06/12'
// }

function isBirthday() {
  const today = new Date();
  const birthDate = new Date(user.dateOfBirth);
  if (today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()) {
    return true;
  } else {
      return false;
    }
  return true;
}

isBirthday(user);
// Write a function that takes a user with name and dateOfBirth and returns birthday with their name if their birthday is today else not your day
function birthdayGreeting() {
  if (isBirthday(user)) {
    return `Happy Birthday, ${user.name}`;
  } else {
    return 'Not Yet!';
  }
}

birthdayGreeting();