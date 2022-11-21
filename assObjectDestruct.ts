console.log("===================object destructing==============");

var employee= {
    firstName: "maya",
    lastName: "shingne",
    company:"tcs",
    company_id:2345
}

var {firstName:emp_name,lastName:emp_lastName,company:emp_company,company_id:emp_id}=employee;
console.log(employee);

console.log(emp_name);
console.log(emp_lastName);
console.log(emp_company);
console.log(emp_id);
        

console.log("===============array destructing===================");

var vaccines=["J&J","Pfizer","sputnik"];
vaccines.push("covaccine");
console.log(vaccines);
var x=vaccines[0];
var y=vaccines[1];
var z=vaccines[2];
console.log(x);
console.log(y);
console.log(z);
var[x,y,z]=vaccines;
for (let index = 0; index < vaccines.length; index++) {

    console.log(vaccines[index]);
    
}


