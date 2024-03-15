function calculateGrade() {
    const marks = document.getElementById("Input").value;
    let grade;
    let points;

    if (marks >= 80 && marks <= 100) {
        grade = 'A+';
        points = 'GPA 5.00';
    } else if (marks >= 70 && marks < 80) {
        grade = 'A';
        points = 'GPA 4.00';
    } else if (marks >= 60 && marks < 70) {
        grade = 'A-';
        points = 'GPA 3.50';
    } else if (marks >= 50 && marks < 60) {
        grade = 'B';
        points = 'GPA 3.00';
    } else if (marks >= 40 && marks < 50) {
        grade = 'C';
        points = 'GPA 2.00';
    } else if (marks >= 33 && marks < 40) {
        grade = 'D';
        points = 'GPA 1.00';
    } else if (marks >= 0 && marks < 33) {
        grade = 'F';
        points = 'GPA 0.00';
    } else {
        document.getElementById("result").innerHTML = "*Please enter a valid mark between 0 and 100.*";
        return;
    }

    document.getElementById("result").innerHTML = `Points: ${points}, Grade: ${grade}`;
}