// Ex. 1

// class Cat {}
// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances

class Cat {
    constructor(name, color, birthYear) {
        this.name = name;
        this.color = color;
        this.birthYear = birthYear;
    }

    getName() {
    return this.name;
    }

    getColor() {
        return this.color;
        }

    getNameAndColor() {
        return (this.name + " is " + this.color );
        }

    get age() {
        return this.calcAge();
    }
    calcAge() {
        return 2022 - this.birthYear;
    }

}
const tallyCat = new Cat("Tally", "gray", 2020);
console.log(tallyCat.getName());
console.log(tallyCat.getColor());
console.log(tallyCat.getNameAndColor());

const myCat1 = new Cat ("Mickey", "white", 2015 );
console.log(myCat1);

const myCat2 = new Cat ("Angela", "black", 2017 );
console.log(myCat2);

const myCat1 = new Cat("Mickey", "white", 2015);
console.log(myCat1.name + ' is ' + myCat1.age + ' years old.');

const myCat2 = new Cat("Angela", "black", 2017);
console.log(myCat2.name + ' is ' + myCat2.age + ' years old.');


// Ex. 2

// class Pirate {

//     constructor(){

//     }

//   }
//   create 3 properties that are set by the constructor
//   create 3 methods
//   instantiate 2 arrays of 3 pirates, name the arrays after 
//   your favorite pirate ships, jollyRoger and blackPearl
//   loop over each array and print 3 properties of each pirate


class Pirate {
    constructor(name, numberEyes, weapon) {
        this.name = name
        this.numberEyes = numberEyes
        this.weapon = weapon
    }

    getWeapon() {
        return this.weapon;
    }

    getName() {
        return this.name;
    }
}

let JollyRoger = [
    new Pirate(["Juedd", "badaboum", "Lang"], 1, "silver"),
    new Pirate(["abc", "efg", "mno"], 2, "galil"),
    new Pirate(["davi", "jhons", "usher"], 1, "galiuhdhdl")
]

for (let i = 0; i < JollyRoger.length; i++) {
    console.log(JollyRoger[i].name);
}

let BlackPearl = [
    new Pirate (["tati", "rally", "lion"], 2, "akut65"),
    new Pirate (["jif", "jpg", "png"], 1, "bond45"),
    new Pirate (["caduso", "roberto", "james"], 3, "rock9mm")
]

for (let i = 0; i < BlackPearl.length; i++) {
    console.log(BlackPearl[i].weapon);
}






