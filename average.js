//Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

const students = [
    {
      name: "David",
      marks: [80, 90, 95, 98],
    },
    {
      name: "Vinoth",
      marks: [77, 88, 89, 90],
    },
    {
      name: "Divya",
      marks: [88, 90, 92, 95],
    },
  ];
  
  for (const student of students) {
    const totalMarks = student.marks.reduce((a, b) => a + b);
    const averageMarks = totalMarks / student.marks.length;
  
    switch (averageMarks) {
      case 90:
        console.log(`${student.name}'s average marks is ${averageMarks} and grade is A`);
        break;
      case 80:
        console.log(`${student.name}'s average marks is ${averageMarks} and grade is B`);
        break;
      case 70:
        console.log(`${student.name}'s average marks is ${averageMarks} and grade is C`);
        break;
      case 60:
        console.log(`${student.name}'s average marks is ${averageMarks} and grade is D`);
        break;
      default:
        console.log(`${student.name}'s average marks is ${averageMarks} and grade is F`);
    }
  }








