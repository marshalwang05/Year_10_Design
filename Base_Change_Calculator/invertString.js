function invertString(){
	numb = document.getElementById('num').value;
	newnumb = ""
	for(i=0; i<numb.length; i++){
		if(numb[i]==="0"){
			newnumb = newnumb + "1"
		}
		else if(numb[i]==="1"){
			newnumb = newnumb + "0"
		}
		else{
			console.log("Invalid Number");
            return -1;
        }
	}
	console.log(newnumb)
	b = 1;

	twosComplement = ""   
    // digit sum
    sum=0        
    // backwards loop
    var i = newnumb.length - 1, j = b.length - 1;
    while (i >= 0 || j >= 0 || sum == 1){
         
        // Comput sum of last
        // digits and carry
        sum += ((i >= 0)? newnumb.charAt(i).charCodeAt(0) -
        '0'.charCodeAt(0): 0);
        sum += ((j >= 0)? b.charAt(j).charCodeAt(0) -
        '0'.charCodeAt(0): 0);
 
        // If current digit sum is
        // 1 or 3, add 1 to result
        twosComplement = String.fromCharCode(parseInt(sum % 2) +
        '0'.charCodeAt(0)) + twosComplement;
 
        // Compute carry
        sum = parseInt(sum/2);
 
        // Move to next digits
        i--; j--;
    }
     
    return twosComplement;
}