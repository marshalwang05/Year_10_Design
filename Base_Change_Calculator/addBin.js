function addBinary(a, b){    
    result = ""   
    // digit sum
    sum=0        
 
    // backwards loop
    var i = a.length - 1, j = b.length - 1;
    while (i >= 0 || j >= 0 || sum == 1){
         
        // Comput sum of last
        // digits and carry
        sum += ((i >= 0)? a.charAt(i).charCodeAt(0) -
        '0'.charCodeAt(0): 0);
        sum += ((j >= 0)? b.charAt(j).charCodeAt(0) -
        '0'.charCodeAt(0): 0);
 
        // If current digit sum is
        // 1 or 3, add 1 to result
        result = String.fromCharCode(parseInt(s % 2) +
        '0'.charCodeAt(0)) + result;
 
        // Compute carry
        sum = parseInt(sum/2);
 
        // Move to next digits
        i--; j--;
    }
     
return result;
}