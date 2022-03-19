console.log("MAP");
function Map(arr,MathFunc)
{
    var newArr = [];
    if(MathFunc==Square)
    {
       for(var i=0;i<arr.length;i++)
        {
            newArr.push(Square(arr[i]));
        }
    }
    else{
        for(var i=0;i<arr.length;i++)
        {
            newArr.push(Cube(arr[i]));
        }

    }
    return newArr;
}

function Square(number)
{
    return number*number;
}

function Cube(number)
{
    return number*number*number;
}

var myArr = [1,2,3,4,5,6];
var squaredArr = Map(myArr,Square);
console.log(squaredArr);