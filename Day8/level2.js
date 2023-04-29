const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  /*Find the person who has many skills in the users object.

Count logged in users, count users having greater than equal to 50 points from the following object.
Find people who are MERN stack developer from the users object

Set your name in the users object without modifying the original users object

Get all keys or properties of users object

Get all the values of users object

Use the countries object to print a country name, capital, populations and languages.
*/
let l1 = users.Alex.skills.length;
let l2 = users.Asab.skills.length;
let l3 = users.Brook.skills.length;
let l4 = users.Daniel.skills.length;
let l5 = users.John.skills.length;
let l6 = users.Thomas.skills.length;
let l7 = users.Paul.skills.length;

const max =Math.max(l1,l2,l3,l4,l5,l6,l7);

console.log(max);

var myFirstWord = "Rahul";
 var mySecondWord = "honest";
 var myThirdWord = "hard working";
  var myFourthWord = "employee";

  //var FinalSentence = myFirstWord + " is a " + mySecondWord + " & " + myThirdWord + " & sincere " + myFourthWord + ".";
  //var FinalSentence = myFirstWord + " is a " + mySecondWord + " & " + myThirdWord + " & skilled " + myFourthWord + ".";
  //var FinalSentence = myFirstWord + "is a" + mySecondWord + "&" + myThirdWord + "& enthusiastic" + myFourthWord + ".";
  var FinalSentence = myFirstWord + " is a " + mySecondWord + " & " + myThirdWord + " " + myFourthWord + ".";
  console.log(FinalSentence);
function resultAll(arr) {
let result = 0;
for (let k = 0; k < arr.length; k++) {
 for (let m = 0; m < arr[ k ].length; m++) {
    if( arr[ k ][ m] % 2 == 1 ) result += ( arr[ k ][ m] );
       }
 }
    return result;
      }
     
console.log(resultAll ( [ [1, 2], [3, 4], [5, 6, 7] ] ));