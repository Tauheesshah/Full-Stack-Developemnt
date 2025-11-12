let object = {
    name:"Shah Tauehed",
    age:21,
    married:false,
    hobbies:["pub-g,","COC","CS","GTA"],
    school:{
        GRADUATION:"ABHINAV",
        XII:"LOCKMANYA",
        X:"KK RAJ",
    },
}

console.log(object.name)
console.log(object.age)
console.log(object.married)
console.log(object.hobbies)
console.log(object.school)

for (let key in object){
    console.log(object[key])
}
console.log(typeof object)

let arr=["pub-g,","COC","CS","GTA"]
console.log(typeof arr)

for (let index in arr){
    console.log(index)
}
//or
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

// Array.isArray()
// object.hasOwnProperty()

let object1 = {
    name:"Shah Tauehed",
    age:21,
    married:false,
    hobbies:["pub-g,","COC","CS","GTA"],
    school:{
        GRADUATION:"ABHINAV",
        XII:"LOCKMANYA",
        X:"KK RAJ",
    },
}

for (let key in object){
    console.log(object1[key])

    if (Array.isArray(object[key])){
        for (let value of object[key]){
            console.log(value);
        }
    }
    else if(typeof object[key] === "object"){
        for(let valueobj in object[key]){
            console.log(valueobj)
        }
    }
    else{
        console.log(object[key])
    }
}