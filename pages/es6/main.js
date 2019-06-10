//es6

// arrow function
//let getAge = () =>  20;
//console.log(getAge());

// 

class Person {
    
    constructor(){
     this.name = "roni";
     this.age = 24;   
     this.address = "rishra";
    }
    getName(){
        return this.name;
    }
    // arrow function
    getAge (){
        return 20;
    }  
    getAddress(){
        return this.address;
    }
}
let person = new Person;
console.log(person.getAddress())