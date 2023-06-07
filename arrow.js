//basic way of function
function mul(a,b) {
    let c = a*b
    return c
}
console.log(mul(12,3));

//we can do the same task in less line of code using arrow function
let mul1 = (a,b) =>{
    return a*b
}
console.log(mul1(12,2));
//we can take some more ex of it
let add = (x,y)=>{return x+y}
console.log(add(11,99));
//we can make it more smaller
let sub = (p,q)=>p-q;
console.log(sub(11,99));

    
