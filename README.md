# Scope-errorHandling-tasks

# Submitted in this repo are my solutions to the Assignment(es6, scope&hosting and error handling) at The Jitu Sofware developemt training cohort 14

1. Write a JavaScript program to target a given value in a nested object based on the given key.
e.g in the object below destructure the degree key.
Json
const user = {

id: 339,

name: 'Fred',

age: 42,

education: {

degree: 'Masters'
}

}
Collapse

2. Write a JavaScript program to check whether a given number is in a given range. e.g. 60, rage 50-100 returns true

3. What is the output of the below code:
JavaScript
let name = "Mary";

function greetPeople(){

  let name = "Clause";

  console.log(`Hello ${name}`)

}

greetPeople()

4. Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

Student Name	Marks
David	80
Vinoth	77
Divya	88
Ishitha	95
Thomas	68

The grades are computed as follows :
Range	Grade
<60	F
<70	D
<80	C
<90	B
<100	A

5. We have the following arrays : 
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
