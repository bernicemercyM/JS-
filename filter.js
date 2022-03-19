console.log("filter");
function Filter(arr)
{
    array = []
    for(i=0;i<arr.length;i++)
    {
        if(myFunc(arr[i]))
            array.push(arr[i]);
    }
    return array;
}

function myFunc(number)
{
    return number>=18;
}

Ages = [18,12,24,34,78,2,5,64]
EligibleToVote = Filter(Ages);
console.log(EligibleToVote);