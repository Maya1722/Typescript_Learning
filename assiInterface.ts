

interface IEmployee {
    emp_id:number;
     emp_name:string;
    emp_company:string;
    emp_salary:number  ;
    Get():void;

}
var objEmployee : IEmployee = {
    emp_id : 123,
    emp_name: "maya shingne",
    emp_company: "tcs",
    emp_salary: 60000,
    Get():void{

        console.log(this.emp_id+" "+this.emp_name+" "+this.emp_company+" "+this.emp_salary);
        
    }
}
