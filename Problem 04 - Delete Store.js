/** Problem 04 - (Delete / Store) */
var fileName= "data.docx";
//write your code here

allowedExtension = ['pdf', 'docx'];

firstWord = fileName[0];

fileNameSplit = fileName.split('.');
extension = fileNameSplit[1];
isAllowed = allowedExtension.includes(extension);

if(firstWord === "#" || isAllowed){
    console.log('Store');
}
else console.log('Delete');