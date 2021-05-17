function toDec(toDecStr, toDecBase){

    toDecStr = document.getElementsById('').value;
    toDecBase = document.getElementsById('').value;


    len = toDecStr.length;
    power = 1; 
    num = 0;
 
    for (i = len - 1; i >= 0; i--){
        // A digit in input number
        // must be less than
        // number's base
        if (val(toDecStr.charAt(i)) >= toDecBase){
            console.log("Invalid Number");
            return -1;
        }
 
        power = power * toDecBase;
        num = num + val(str.charAt(i)) * power;
    }
 
    return num;
}