function toOtherPosInt() {
	N = document.getElementById('N').value;
    otherBase = document.getElementById('otherBase').value;

	newN="";
	Q=Math.floor(Math.abs(N));
	R="";
	while (true) {
 		R=Q%otherBase;
 		newN = "0123456789abcdefghijklmnopqrstuvwxyz".charAt(R) + newN;
		Q=(Q-R)/otherBase;
		if (Q==0){
			break;
		}
	}
 	console.log(newN);
}

function toDec(toDecStr, toDecBase){

    toDecStr = document.getElementById('toDecStr').value;
    toDecBase = document.getElementById('toDecBase').value;

    len = toDecStr.length;
    power = 1; 
    num = 0; 
    for (i = len - 1; i >= 0; i--){
        if (toDecStr.charAt(i) >= toDecBase){
            console.log("Invalid Number");
            return -1;
        } 
        power = power * toDecBase;
        num = num + toDecStr.charAt(i) * power;
    } 
    console.log(num);
}

function addBin(){    
    
    sum1 = document.getElementById('sum1').value;
    sum2 = document.getElementById('sum2').value;

    resultsum = ""   
    // digit sum
    dsum=0        
    // backwards loop
    i = sum1.length - 1;
    j = sum2.length - 1;
    while (i >= 0 || j >= 0 || dsum == 1){
         
        // last digits and carry
        dsum += ((i >= 0)? sum1.charAt(i).charCodeAt(0) -'0'.charCodeAt(0): 0);
        dsum += ((j >= 0)? sum2.charAt(j).charCodeAt(0) -'0'.charCodeAt(0): 0);
 
      	resultsum = String.fromCharCode(parseInt(dsum % 2) +'0'.charCodeAt(0)) + resultsum;
 
        //  carry
        dsum = parseInt(dsum/2);
        i--; j--;
    }
    console.log(parseInt(resultsum));
}

function addBinAgain(sum1, sum2){     

    result = ""   
    // digit sum
    dsum=0        
    // backwards loop
    i = sum1.length - 1;
    j = sum2.length - 1;
    while (i >= 0 || j >= 0 || dsum == 1){
         
        // Comput sum of last
        // digits and carry
        dsum += ((i >= 0)? sum1.charAt(i).charCodeAt(0) -'0'.charCodeAt(0): 0);
        dsum += ((j >= 0)? sum2.charAt(j).charCodeAt(0) -'0'.charCodeAt(0): 0);
 
        // If current digit sum is
        // 1 or 3, add 1 to result
        result = String.fromCharCode(parseInt(dsum % 2) +'0'.charCodeAt(0)) + result;
 
        // Compute carry
        dsum = parseInt(dsum/2);
 
        // Move to next digits
        i--; j--;
    }
    return parseInt(result)
}

function invertString(){
	numb = document.getElementById('numb').value;
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
	console.log("-" + addBinAgain(newnumb, "1"))
}


function toBinaryDecimal(){
    deci = document.getElementById('deci').value;
    deciStr = ""
	for (i=-1; i>=-5; i--){
		currentDecimal = Math.pow(2,i);
		if(currentDecimal<=deci){
			deciStr = deciStr + "1";
			deci = deci - currentDecimal;
		}
		else{
			deciStr = deciStr + "0";
		}
	}
	console.log("0."+deciStr)
}

function subtractBin(){
	sum3 = document.getElementById('sum3').value;
    sum4 = document.getElementById('sum4').value;
    sum4invert = ""
	for(i=0; i<sum4.length; i++){
		if(numb[i]==="0"){
			sum4invert = sum4invert + "1"
		}
		else if(numb[i]==="1"){
			sum4invert = sum4invert + "0"
		}
	}

    resultdiff = ""   
    // digit sum
    dsum=0        
    // backwards loop
    i = sum3.length - 1;
    j = sum4invert.length - 1;
    while (i >= 0 || j >= 0 || dsum == 1){
         
        // last digits and carry
        dsum += ((i >= 0)? sum3.charAt(i).charCodeAt(0) -'0'.charCodeAt(0): 0);
        dsum += ((j >= 0)? sum4invert.charAt(j).charCodeAt(0) -'0'.charCodeAt(0): 0);
 
 
        resultdiff = String.fromCharCode(parseInt(dsum % 2) +'0'.charCodeAt(0)) + resultdiff;
 
        // carry
        dsum = parseInt(dsum/2);
        i--; j--;
    }
    console.log(parseInt(resultdiff));
}












