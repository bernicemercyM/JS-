console.log("forEach");
function forEach(arr,parameter)

{
    if(parameter=="display")
    {
        Display(arr);
    }
    else{
        DisplayOnlyElements(arr);
    }
    
  
}

function Display(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        console.log("index :"+i+"Element :",arr[i]);
    }
}

function DisplayOnlyElements(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        console.log("Element :",arr[i]);
    }
}

var myArr = [1,2,3,4,5,6];
forEach(myArr,DisplayOnlyElements);
