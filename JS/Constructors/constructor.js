//!  NEW keyword Does create the insatnace of a user defined object type of one of the built in object type that has a constructor function

//constructo Function
// function Car(make,model,year){
//     this.make=make,
//     this.model=model,
//     this.year=year
// }

//Class constructor
class Car{
    constructor(make,model,year){
        this.make=make,
        this.model=model,
        this.year=year
    }
}


const Car1=new Car('Toyota',"Toyota",1995);
const Car2=new Car('BMW','BMW',1999);



// Call with Function
let person2 = {
    name:'manoj',
};

let person3 = {
    name:'manoj',
};


function myFunction(age,city){
    this.age=age;
    this.city=city;
}

myFunction.call(Person2,24,'pune')
console.log(person2)



// call with Constructor
let person={
    name:"Shaad gavo boy"
}
class PersonDetails{
    constructor(age,city){
        this.age=age,
        this.city=city
    }
}
Object.assign(person ,new PersonDetails(90,'Pakistan'))
console.log(person)



// Bind with function
let person6={
    name:'suresh',
}
let person7={
    name:'ramesh',
}
function myFunction3(age,city){
    this.age=age;
    this.city=city;
}

let mybind = myFunction.bind(person7,42,'pune')
mybind()



// bind with class
let persons={
    name:"Shaad gavo boy"
}
class PersonDetails{
    constructor(age,city){
        this.age=age,
        this.city=city
    }
}
let obj = new PersonDetails
let myBind=obj.setDetails.bind(persons,24,'pune')
console.log(mybind())