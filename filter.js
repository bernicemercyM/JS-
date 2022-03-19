console.log("filter");
function Filter(arr,AgeFinder)
{
    array = []
    if(AgeFinder==VoterAge)
    {
        for(i=0;i<arr.length;i++)
        {
            if(VoterAge(arr[i]))
                array.push(arr[i]);
        }
    }
    else{
        for(i=0;i<arr.length;i++)
        {
            if(UnderAge(arr[i]))
                array.push(arr[i]);
        }

    }

    return array;
}

function VoterAge(number)
{
    return number>=18;
}

function UnderAge(number)
{
    return number<=18;
}
Ages = [18,12,24,34,78,2,5,64]
EligibleToVote = Filter(Ages,VoterAge);
console.log(EligibleToVote);