let students = [];

// Add student
function addStudent(){

let name = document.getElementById("name").value;
let roll = document.getElementById("roll").value;
let math = Number(document.getElementById("math").value);
let science = Number(document.getElementById("science").value);
let english = Number(document.getElementById("english").value);

let student = {
name:name,
roll:roll,
math:math,
science:science,
english:english
};

students.push(student);

document.getElementById("output").innerHTML = "Student Added!";
}


// Display all students
function displayStudents(){

let output="";

for(let s of students){

let total = s.math + s.science + s.english;
let avg = total / 3;

output += `
<p>
Name: ${s.name} |
Roll: ${s.roll} |
Total: ${total} |
Average: ${avg.toFixed(2)}
</p>
`;

}

document.getElementById("output").innerHTML = output;

}


// Students with avg > 80
function showHighScorers(){

let output="";

for(let s of students){

let avg = (s.math + s.science + s.english)/3;

if(avg>80){

output += `<p>${s.name} - Avg: ${avg.toFixed(2)}</p>`;

}

}

document.getElementById("output").innerHTML = output;

}


// Failed students
function showFailed(){

let output="";

for(let s of students){

let avg = (s.math + s.science + s.english)/3;

if(avg<40){

output += `<p>${s.name} - Failed (Avg: ${avg.toFixed(2)})</p>`;

}

}

document.getElementById("output").innerHTML = output;

}


// Count students
function countStudents(){

document.getElementById("output").innerHTML =
"Total Students: " + students.length;

}