class eventManagement {


    public Display():void{

        console.log("Event management" );
        
    }
}

    class organizer extends eventManagement{
        public id:number;
        public name:string;
    constructor(id:number,name:string){

      super();
      this.id=id;
      this.name=name;
    }
    public Display(): void {
          super.Display()
          console.log(`Id: ${this.id} Name of organizer:${this.name}`);
          
    }


    }
    class events extends eventManagement{
        public id:number;
        public name:string;
        public description:string;
        public starttime:number;
    
    constructor(id:number,name:string,description:string,starttime:number){

      super();
      this.id=id;
      this.name=name;
      this.description=description;
      this.starttime=starttime;
      

    }
    public Display(): void {
          super.Display()
          console.log(`Id: ${this.id} name of organizer: ${this.name} Event Description: ${this.description} Time: ${this.starttime} PM`);
          
    }


    }
class venue extends eventManagement{
        public id:number;
        public name:string;
        public description:string;
        public starttime:number;
        public address:string;
    constructor(id:number,name:string,description:string,starttime:number,address:string){

      super();
      this.id=id;
      this.name=name;
      this.description=description;
      this.starttime=starttime;
      this.address=address;

    }
    public Display(): void {
          super.Display()
          console.log(`Id: ${this.id} Name of organizer: ${this.name} Venue Description: ${this.description} Time: ${this.starttime}PM Address:${this.address} `);
          
    }


    }

let   Manage :eventManagement[]=new Array(new organizer(101,"maya shingne"),new events(123,"Anil shingne","Birthday",11),new venue(103,"Smiral","Birthday",4,"pune"));


for(var eve of Manage) {
    eve.Display();
}
















