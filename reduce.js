console.log("Reduce");
function Reduce(arr,reducer)
{   
    reducedValue = 0;
    if(reducer == AddNumbers)
    {
        reducedValue = AddNumbers(arr)
    }
    else{
        reducedValue = ProductOfNumbers(arr);
    }
    return reducedValue;
}

function AddNumbers(arr)
{
    sum = 0;
    for(i=0;i<arr.length;i++)
    {
        sum = sum + arr[i];
    }
    return sum;
}

function ProductOfNumbers(arr)
{
    product = 1;
    for(i=0;i<arr.length;i++)
    {
        product = product * arr[i];
    }
    return product;
}



Arr = [1,2,3,4,5,6,7];
reduced_result = Reduce(Arr,ProductOfNumbers);
console.log(reduced_result);