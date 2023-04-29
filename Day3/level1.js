//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let fname ='Unzala';
let lname= 'Husain';
let age=100;
let country='India';
let city= 'Bareilly';
let isMarried = false;
let year = new Date();
let y = year.getFullYear();
console.log(y);
console.log(typeof(fname));
console.log(typeof(lname));
console.log(typeof(age));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(isMarried));
console.log(typeof(y));

//Check if type of '10' is equal to 10
console.log('10'==10);
console.log('10'===10);

/*
Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
Find the length of python and jargon and make a falsy comparison statement.
 */

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 === '4');
let s= 'python';
let q= 'jargon';
len1= s.length;
len2= q.length;
console.log(len1  , len2);
console.log(len1 != len2);