let obj1 ={
    id : 123,
    name : "dj",
    address : "Ramghat"
}
//old way to assign one object to another object
let obj2 = obj1
console.log(obj2);
//destruture the object
let  {id,name} = obj1
//     ^
//     |
//the key name and new object variable name must be same
console.log(id);
console.log(typeof(id));
//if we dont want to use let or const within declaration then we can use ()

let address;
({address}=obj1)
console.log(address);
//old way to add new key value pair

obj1.skills = ["java","python","javascript","oracle"]
console.log(obj1);

//add new variable and default value using destruture

let {department = "computer science"} = obj1;
obj1.department =
console.log(id,name,address,department);
console.log(obj1);

//to add alias to reduce the conflict of variables name
let {address : permanent_address} = obj1
console.log(permanent_address);