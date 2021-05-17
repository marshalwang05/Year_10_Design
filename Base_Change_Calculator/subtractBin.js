function subtractBin(sum1, sum2){    
    
    sum1 = document.getElementById('').value;
    sum2 = document.getElementById('').value;

    sum2new = ""   
    // digit sum
    dsum=0        
    // backwards loop
    var i = sum1.length - 1, j = sum2.length - 1;
    while (i >= 0 || j >= 0 || sum == 1){
         
        // Comput sum of last
        // digits and carry
        dsum += ((i >= 0)? sum1.charAt(i).charCodeAt(0) -
        '0'.charCodeAt(0): 0);
        dsum += ((j >= 0)? sum2.charAt(j).charCodeAt(0) -
        '0'.charCodeAt(0): 0);
 
        // If current digit sum is
        // 1 or 3, add 1 to result
        sum2new = String.fromCharCode(parseInt(dsum % 2) +
        '0'.charCodeAt(0)) + sum2new;
 
        // Compute carry
        sum = parseInt(dsum/2);
 
        // Move to next digits
        i--; j--;
    }
     
return result;
}