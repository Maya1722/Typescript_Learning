function doubleMe(x:number); // declaration 
function doubleMe(y:string); // function declaration
function doubleMe(arr:string[]);


function doubleMe(x:any) { // function implementation
// checking input parameter as number or not
if(x && typeof x === "number")
{
    console.log(x*2);
}
// checking input para as string or not
else if(x && typeof x === "string")
{
    console.log(x + " "+ x);
} 
else if (Array.isArray(x))
{
  return x.map(name => console.log(name + " " + name))
}
}t

doubleMe(2); // calling the function 
doubleMe("John");
doubleMe(["Codemind", "tet"]);
