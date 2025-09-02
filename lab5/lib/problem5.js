function Student(name, id) {
  this.name = name;
  this.id = id;
  this.exams = [];
}

Student.prototype.addExam = function(score) {
  this.exams.push(score);
};

const calculateAverage = (scores) => {
  if (scores.length === 0) {
    return 0;
  }
  const sum = scores.reduce((total, currentScore) => total + currentScore, 0);
  return sum / scores.length;
};

function runGradeCalculator() {
  console.log("=== STUDENT GRADE CALCULATOR ===\n");
  const students = [];

  console.log("Creating Student 1...");
  const student1 = new Student("Alice Johnson", "A001");
  student1.addExam(93);
  student1.addExam(89);
  students.push(student1);

  console.log("Creating Student 2...");
  const student2 = new Student("Bob Smith", "B002");
  student2.addExam(85);
  student2.addExam(80);
  students.push(student2);

  console.log("Creating Student 3...");
  const student3 = new Student("Carol Davis", "C003");
  student3.addExam(72);
  student3.addExam(75);
  students.push(student3);

  console.log("\n=== STUDENT RESULTS ===");
  students.forEach((student, index) => {
    console.log(`\nStudent ${index + 1}:`);
    console.log(`Name: ${student.name}`);
    console.log(`Exam Scores: [${student.exams.join(", ")}]`);
    console.log(`ID: ${student.id}`);
    console.log(`Exam Average: ${calculateAverage(student.exams).toFixed(1)}`);
  });
}

runGradeCalculator();
