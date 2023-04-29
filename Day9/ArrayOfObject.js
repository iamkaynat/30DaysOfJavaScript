const users =[
    {
        firstName:'akshay' , lastNAme: "saini" , age:26
    },
    {
        firstName:'kaynat' , lastNAme: "husain" , age:21
    },
    {
        firstName:'bhaskar' , lastNAme: "jha" , age:21
    },
    {
        firstName:'Deepika' , lastNAme: "Padukone" , age:29
    }
];



for(const i of Object.keys(users)){
    const name=users[i].firstName + " "+users[i].lastNAme;
    console.log(name);
}
const name= users.map(x=>{
    return x.firstName+" "+x.lastNAme;
})
console.log(name);

let s=0;
for(const i of Object.keys(users)){
    let ob={};
    1
}
