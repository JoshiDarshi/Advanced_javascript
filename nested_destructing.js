const user ={
    name :"daemon",
    address:"12/4 park avenue",
    age : 21,
    department :{
        name :"sales",
        shift : "morning",
    
   address :{
    city : "banglore",
    street : "79 Residential Road",
    pin : 514004
   }
}}
let {department} = user;
console.log(department);
let{department:{address}} = user;
//console.log(department.address);
console.log(address);
let{department:{address:{city}}} = user;
console.log(city);
//getvalue method
// const getValue = key => {
//     const { [key]: returnValue } = user;   
//     return returnValue;
// }
