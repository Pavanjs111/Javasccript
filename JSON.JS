// let student={sname:"dinga",age:29,marks:420,dept:"CSE",gender:"Male"};
// console.log(student.sname);
// console.log(student.age);
// console.log(student.marks);
// console.log(student.dept);

// console.log(student.gender);
// for (let item in student)
// {
//     console.log(item);
//     console.log(typeof item);
//     console.log(item, student[item]);
// }

let students =[
    {
        sname:"Pavan",
        age:22,
        marks:625,
        dept:"CSE"
    },

    {
        sname:"Jishnu",
        age:22,
        marks:600,
        dept:"BCA"
    },

    {
        sname:"Pritvi",
        age:22,
        marks:595,
        dept:"EEE",
    },

    {
        sname:"Meenal",
        age:22,
        marks:556,
        dept:"VTU BE CSE",
    },

];


// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);

// console.log(students);

for (let student of students){
console.log(student.sname);
}