// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

let birth_age=2000;
let present_age=2022-birth_age;
if(present_age>=13 && present_age>=19){
  console.log("Teenage");
}else if(present_age>=20 && present_age>=29){
  console.log("Twenties")
}