function insertionSort(array) {
	
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
			wum++
	}else{wum++}}

	for (let Lum = 0; Lum < array.length; Lum++) {
		if (smallnum > array[yum]) {
		smallnum = array[yum]
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
			if(numruns == 50){
				return array
			}
	}
	return array;
}

module.exports = insertionSort;
