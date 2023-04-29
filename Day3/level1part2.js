/* Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python

*/
let s ='dragon';
let q='python';
let ss = s.includes('on');
let qq=q.includes('on');
console.log(ss , qq);

/* Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now. 
*/

let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());
console.log(now.getDay()); 
console.log(now.getMinutes());
console.log(now.getTime());