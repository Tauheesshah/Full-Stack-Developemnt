//polymorphism is basically yo have  a method in multiple object

class Vehicle{
    run(){
        console.log('Vehicle is running')
    }
}
class Car1{
    run(){
        console.log("Car is running ")
    }
}
class Truck{
    run(){
        console.log("Truck  is running ")
    }
}
let v1 = new Vehicle()
let v2 = new Car1()
let v3 = new Truck();


// Different Example


class Animal{
    speak(){
        console.log("Animal Speaks")
    }
}
class Dog extends Animal{
    speak(){
        console.log("Dog Barks")
    }
}
class Cat extends Animal{
    speak(){
        console.log("Cat meows")
    }
}

function makeSound(Animal){
    Animal.speaks()
}
let dog = new Dog()
let cat = new Cat()

makeSound(dog); // Dog Barks
makeSound(cat); // Cat meows



// this is with object no class method

const printer = {
    print:()=> console.log("Default print")
};
const pdfPrinter = {
    print:()=>console.log("Printing PDF")
}
const htmlPrinter = {
    print:()=>console.log("Printing HTML")
}

function startPrint(printerObj){
    printerObj.print()
}

startPrint(pdfPrinter);  // Printing PDF
startPrint(htmlPrinter); //Printing HTML