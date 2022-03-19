console.log("Reduce");
function Reduce(arr)
{
    sum = 0;
    for(i=0;i<arr.length;i++)
    {
        sum = sum + arr[i];
    }
    return sum;
}



Arr = [1,2,3,4,5,6,7];
reduced_result = Reduce(Arr);
console.log(reduced_result);