const user = [
{
name : "kathrine",
address :"87/3 Park Avenue",
age : 22,    
},
{
    name : "calorine",
    address :"79/3 Park Avenue",
    age : 24,    
},
{
    name : "stephan",
    address :"87/3 Park Avenue",
    age : 25,    
},
]
//we can iterate the destructure like this
for(let{name,age}of user){
    console.log(name+" is"+" "+age+" years old");
}