interface Rectangle{

    height:number,
    width:number,

}

interface ColoredRectangle extends Rectangle{

 color:string
}
var coloredRectangle:ColoredRectangle={

         height:20,
         width:20,
        color:"red"
}
    