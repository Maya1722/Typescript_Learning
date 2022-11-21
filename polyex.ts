
class person{

    public firstName:string;
    public lastName:string;
    public description:string;

    public print():void{

        console.log(`hello person`);

    }
}

class student extends person{

    constructor(firstName:string,lastName:string,description:string){

        super();
        this.firstName=firstName;
        this.lastName=lastName;
        this.description=description;

    }

     public print(): void {
       
        super.print()
    
     console.log(` hii ${this.firstName} ${this.lastName} i am ${this.description} of MGM college`);
    
     }
    }
    class employee extends person{

        constructor(firstName:string,lastName:string,description:string){
    
            super();
            this.firstName=firstName;
            this.lastName=lastName;
            this.description=description;
    
        }
    
         public print(): void {
             
            super.print()
        
         console.log(` hii ${this.firstName} ${this.lastName} i am ${this.description} of wipro company`);
        
         }
        }

   const s=new student("anil","shingne","student");
   s.print();
   const e=new employee("maya","shingne","employee");
   e.print();
    
   


    




