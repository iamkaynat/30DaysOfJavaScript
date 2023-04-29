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
  };


//Find the person who has many skills in the users object.
function maxSkills(ob){
    let max= Number.MIN_SAFE_INTEGER;
    let res;
    for(const i in ob){
        const key = ob[i];
        if(key.skills.length>max){
            max=key.skills.length;
            res=i;
        }
    }
    return res;
}

console.log(maxSkills(users));

//Count logged in users, count users having greater than equal to 50 points from the following object.
function loggedIn(ob){
    let logged=0;
    for(const i in ob){
        const key= ob[i];
        if(key.isLoggedIn==true){
            logged+=1;
        }
    }
    return logged;
}
console.log(loggedIn(users));

//Find people who are MERN stack developer from the users object


//Set your name in the users object without modifying the original users object

users.Kaynat={
    email:'unzkay196@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: true,
    points: 40

};
console.log(users);

//Get all keys or properties of users object
console.log(Object.keys(users));
//Get all the values of users object
console.log(Object.values(users));
