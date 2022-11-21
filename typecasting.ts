const courses=["Angular","React","nodejs"];
 
console.log(courses.toString());

interface IEmployee{

    id:number;
     name:string;
     lastName:string;
}

let e1: IEmployee;

let e2={id:123,name:"john",lastName:"sparrow"};

e1 = e2;

 //e2=e1;