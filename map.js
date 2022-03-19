console.log("MAP");
function Map(arr)
{
    var newArr = [];
    for(var i=0;i<arr.length;i++)
    {
        newArr.push(myFunc(arr[i]));
    }
    return newArr;
}

function myFunc(number)
{
    return number*number;
}

var myArr = [1,2,3,4,5,6];
var squaredArr = Map(myArr);
console.log(squaredArr);