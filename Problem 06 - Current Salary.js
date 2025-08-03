/** Problem 06 : (Current Salary ) */
var experience = 3;
var startingSalary = 15000;
//write your code here
currentSalary = startingSalary;

for(var i=1; i<=experience; i++){
    currentSalary += currentSalary*0.05;
}

console.log(currentSalary.toFixed(2));