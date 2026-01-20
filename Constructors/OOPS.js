class Car{
    constructor(n,b){
        this.name=n;
        this.brand=b;
    }
    showDetails(){
        console.log(`${this.name} ${this.brand}`)
    }
}
// let c1 = new Car('desire','suzuki')
// console.log(c1)
// console.log(c1.showDetails())


class SUV extends Car{
    constructor(x,y){
        super(x,y)
        this.buyer="Shah Tauheed"
        
    }
}
class miniSUV extends SUV {
    constructor (x,y){
        super(x,y);
        this.type="mini-suv"
    }
}
let car2 = new miniSUV('audi','audi')
console.log(car2)




//  Encapsulation Getters
class Cars {
    #count; //private variable you cannont access out side of it 
    constructor(n,b){
        this.name=n;
        this.brand=b;
        this.#count=100;
    }

    showDetails(){
        console.log(`${this.name} ${this.brand} ${this.#count}`)
    }

    getCount(){
        return this.#count; //getter methods to access private fields
    }
}

let c11 =new Cars("Thar","Mahindra")
console.log(c11,"this is the encapsulation") //wont show count
console.log(c11.getCount()) //now we can see the private value (100)