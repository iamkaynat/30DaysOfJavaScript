class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    getFullInfo() {
        return `${this.name} is ${this.age} year(s) old. ${this.name} has ${this.color} color and ${this.legs} legs.`
    }

    set setAge(age) {
        this.age += 1;
    }
    get getLegs() {
        return this.legs;
    }

}
const dog = new Animal('Snow', 1, 'White', 4);
const cat = new Animal('Nekko', 2, 'black', 4);
console.log(dog.getFullInfo());
console.log(cat.getFullInfo());

class Pet extends Animal {
    constructor(name, age, color, legs, gender) {
        super(name, age, color, legs);
        this.gender = gender;
    }
    getFullInfo() {
        return `${this.name} is my pet and it is ${this.age} year(s) old and is of ${this.color} color and is a ${this.gender}.`
    }
}
const p = new Pet('Snow', 1, 'White', 4, 'Male');
console.log(p.getFullInfo());