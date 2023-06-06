let student = {
    fname : "abc",
    lname : "xyz",
    class : "Btech",
    rollno : 12,
    obj : department = {
     depart : "MCA"
    },
    aveyi : function() {
        console.log("me function hu")
    }
   
}
console.log(student);
console.log(student.fname);
//to update value in object
student.fname = "Elena"
//to add key value in js
student.address = "USA"
//to delete key value in object
delete student.address
//to iterate object in js we can get value of object not key
for (let x in student) {
    console.log(student[x]);
}
//function constructor
function  student1(fname,lname,rollNo,obj,aveyi) {
    this.fname = fname
    this.lname = lname
    this.rollNo = rollNo
    this.obj = obj
    this.aveyi = aveyi
}
let first_student = new student1("Ram","Sharma","121","biology",student.aveyi())
console.log(first_student);
let second_student = new student1("Ram","Sharma","121","biology",student.aveyi())
console.log(second_student);

//to access keys of object
let key = Object.keys(student)
console.log(key);
//to use built in method
console.log(student.fname,student.lname.toUpperCase())
