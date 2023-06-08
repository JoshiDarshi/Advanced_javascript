
//applying spread operator on object
const data={
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}
const nwdata = {
    salary : 12500,
    city : "Indore",
}
const spread = {data,...nwdata};
console.log(spread);
console.log(data);

//applying spread operator on array

let a1 = [21,12,11,32,44]
let a2 = [55,43,22,10,21]
let a3 = [...a2,...a1]
console.log(a3);

//we can pass multiple arguements in function using spread operator

function sum(a,b,c) {
    return a+b+c
}
const arr = [12,21,12]
console.log("addition using spread operator",sum(...arr));