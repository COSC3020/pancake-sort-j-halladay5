function pancakeSort(array)
{
    var flipPos;
    
    if(array.length < 2)
    {
        return array;
    }
    
    for(var i = 1; i < array.length; i++)
    {
        flipPos = 0;
        if(array[i] <= array[0])
        {
            if(i == 1)
            {
                flip(array, i+1)
            }
            
            if(i > 1)
            {
                flip(array, i);
                flip(array, i+1);
            }
        }
        
       if((array[i] > array[0]) && (array[i] < array[i-1]))
       {
           flip(array, i+1);
           while(array[0] <= array[flipPos])
           {
               flipPos++;
           }
           flip(array, flipPos);
           flip(array, flipPos-1);
           flip(array, i+1);
       }
    }
    return array;
}

function flip(array, n)
{
    let temp = array.slice(0, n);
    temp.reverse();
    
    for(let i = 0; i < n; i++)
    {
        array[i] = temp[i];
    }
    
    return array;
}
