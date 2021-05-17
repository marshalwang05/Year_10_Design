function toTwoNegative(N) {
	newN="";
	Q=Math.floor(Math.abs(N));
	R;
	while (true) {
 		R=Q%2;
 		HexN = "0123456789abcdefghijklmnopqrstuvwxyz".charAt(R) + newN;
		Q=(Q-R)/2;
		if (Q==0){
			break;
		}
	}
 	return (newN);
}