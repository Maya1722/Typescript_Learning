class Base{

     greet():void{

    console.log("hello ");
      
     }
}
class Derived extends Base{
      
      greet(name?:string){
         if(name==undefined){
            super.greet();
            
         }
         else{
            console.log(`hello i am ${name.toUpperCase()}`);
            
         }
           
      }
       
}
const d =new Derived();
d.greet();
d.greet("smiral");