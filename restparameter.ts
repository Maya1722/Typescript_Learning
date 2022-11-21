var product = function (...nums) 
{
    var result = 1 ;
    for(var i = 0; i < nums.length; i++)
    {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
}


console.log(product(2,3,4,5));


var product = function (...nums) 
{
    var result = 1 ;
    for(var i = 0; i < nums.length; i++)
    {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
}

console.log(product(2,3,4,5));

var hello = (name:string):string=> {
    return "Hello" + name;
};

console.log(hello("AngularBatch4"));

//arraow functiom
var multiply = (num1:number, num2:number):number=> {
    return num1 * num2;
}

console.log(multiply(2,7));
