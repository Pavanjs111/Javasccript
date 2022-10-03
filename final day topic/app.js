
let students=[
    {
        sname:"Dinga",
        age:29,
        marks:420,
        dept:"CSE",
        imgurl:"https://bootstrapmade.com/demo/templates/Presento/assets/img/team/team-1.jpg"
    },
    {
        sname:"Nick",
        age:29,
        marks:420,
        dept:"CSE",
        imgurl:"https://bootstrapmade.com/demo/templates/Presento/assets/img/team/team-2.jpg"
    },
    {
        sname:"Jhon",
        age:29,
        marks:420,
        dept:"CSE",
        imgurl:"https://bootstrapmade.com/demo/templates/Presento/assets/img/team/team-3.jpg"
    },
    {
        sname:"Raju",
        age:29,
        marks:420,
        dept:"CSE",
        imgurl:"https://bootstrapmade.com/demo/templates/Presento/assets/img/team/team-4.jpg"
    },
    {
        sname:"Leela",
        age:18,
        marks:650,
        dept:"Ece",
        imgurl:"https://bootstrapmade.com/demo/templates/Presento/assets/img/testimonials/testimonials-1.jpg"
    }
];
console.log(students);
for (let student of students) {
    let stud=document.getElementById("stud")
    stud.innerHTML+=
    `
    <tr>
        <td>${student.sname}</td>
        <td>
            <img src=${student.imgurl} height=200 width=200>
        </td>
        <td>${student.age}</td>
        <td>${student.marks}</td>
        <td>${student.dept}</td>
  </tr>
    `
}