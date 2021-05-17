function toDecinBuilt(a,base){
	newa = (a).toString(base)
	return newa
}
function addBinary_inBuilt(a, b) {
    deca = a.toString(10);
    decb = b.toString(10);
    decfinal = deca+decb;
    return decfinal.toString(2);
}
function subBinary_inBuilt(a, b) {
    deca = a.toString(10);
    decb = b.toString(10);
    if(deca>decb){
    	decfinal = deca-decb;
    }
    else{
    	decfinal = decb-deca;

    }
    return decfinal.toString(2);
}



a = (32767).toString(16)  // result: "7fff"
b = (255).toString(8)     // result: "377"
c = (1295).toString(36)   // result: "zz"
d = (127).toString(2)     // result: "1111111"