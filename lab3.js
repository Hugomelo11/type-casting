// take a number from 100% to 0% with 100% being A+
function assignGrade(gradeNumber) {
  let gradeLetter = "F";

  // 100-90 A
  // 89-80 B
  // 79-70 C
  if (gradeNumber >= 90) {
    gradeLetter = "A";
  } else if (gradeNumber > 80 && gradeNumber < 89) {
    gradeLetter = "B";
  } else if (gradeNumber > 70 && gradeNumber < 79) {
    gradeLetter = "C";
  }
  return gradeLetter;
}   
console.log(assignGrade(90));
