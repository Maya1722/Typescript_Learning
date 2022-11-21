console.log("===================object destructing==============");
var employee = {
    firstName: "maya",
    lastName: "shingne",
    company: "tcs",
    company_id: 2345
};
var emp_name = employee.firstName, emp_lastName = employee.lastName, emp_company = employee.company, emp_id = employee.company_id;
console.log(employee);
console.log(emp_name);
console.log(emp_lastName);
console.log(emp_company);
console.log(emp_id);
for (var element in employee) {
    console.log(employee);
}
console.log("===============array destructing===================");
var vaccines = ["J&J", "Pfizer", "sputnik"];
vaccines.push("covaccine");
console.log(vaccines);
var x = vaccines[0];
var y = vaccines[1];
var z = vaccines[2];
console.log(x);
console.log(y);
console.log(z);
var x = vaccines[0], y = vaccines[1], z = vaccines[2];
for (var index = 0; index < vaccines.length; index++) {
    console.log(vaccines[index]);
}
