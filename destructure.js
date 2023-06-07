let obj1 ={
    id : 123,
    name : "dj"
    
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