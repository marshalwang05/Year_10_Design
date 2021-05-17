function subtractBin(sum1, sum2){    
    
    sum1 = document.getElementById('').value;
    sum2 = document.getElementById('').value;
    
    sum1_10 = (sum1).toString(10);
    sum2_10 = (sum2).toString(10);

    result = sum1_10 + sum2_10;
    resultfinal = (result).toString(2);

    return resultfinal
}