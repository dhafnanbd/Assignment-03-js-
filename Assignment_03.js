/** Problem -01 ( Divide the Asset ) */
var area = 800;

devidedAsset = area/2;

console.log(devidedAsset);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;

if(money>=25000) console.log("Laptop");
else if(money>=10000 && money<25000) console.log("Cycle");
else console.log("Chocolate");


/** Problem -03 ( Medicine Planner ) */
var lastDay = 6;

for(var i=1; i<=lastDay; i++){
    if(i%3===0) console.log(i,"- medicine");
    else console.log(i,"- rest");
}


/** Problem 04 - (Delete / Store) */
var fileName= "data.docx";

allowedExtension = ['pdf', 'docx'];

firstWord = fileName[0];

fileNameSplit = fileName.split('.');
extension = fileNameSplit[1];
isAllowed = allowedExtension.includes(extension);

if(firstWord === "#" || isAllowed){
    console.log('Store');
}
else console.log('Delete');


/** Problem 05 - PH Email Generator*/
student = { 
    name: 'jhankar', 
    roll: 1014,
    department: 'cse'
}

email = student.name + student.roll + '.' + student.department + '@ph.ac.bd'

console.log(email);


/** Problem 06 : (Current Salary ) */
var experience = 3;
var startingSalary = 15000;

currentSalary = startingSalary;

for(var i=1; i<=experience; i++){
    currentSalary += currentSalary*0.05;
}

console.log(currentSalary.toFixed(2));