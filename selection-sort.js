
function selectionSort(array) {
	if(array.length == 0){
		return array
	}
	let bignum = array[0]
	let wum = 1
	let yum = 1 
	let smallnum = array[0]
	for (let Lum = 0; Lum < array.length; Lum++) {
		if (bignum < array[wum]) {
			bignum = array[wum]
			console.log(bignum + 'yellow');
			wum++
	}else{wum++}}

	for (let Lum = 0; Lum < array.length; Lum++) {
		if (smallnum > array[yum]) {
		smallnum = array[yum]
		console.log(smallnum +"ello");
		yum++
	}else{yum++}}

	let num = bignum
	let one = 0  
	let numruns = 0 
	smallnum--
	while (smallnum !=num) {
		numruns++
			let check = 0 
			for (let index = 0; index <= array.length; index++) {
				const value  = array[index+one];
				if (value == num) {	
					array.unshift(num)
					let BeGONE = array.splice(index+one+1,1);
					check++
				}
			}
			if (check >= 1) {
			one = one+check
			}
			num--
			console.log(num);
			if(numruns == 50){
				return array
			}
		
	}
	return array;
}
module.exports = selectionSort;

	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */