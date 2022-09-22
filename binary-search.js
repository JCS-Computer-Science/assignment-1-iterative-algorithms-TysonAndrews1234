function binarySearch(array, searchTerm) {
	
	let length = array.length
	
	console.log(length);
	let num = Math.round(length/2) 
	let rum = Math.round(length/2)
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


 		if(smallnum == searchTerm){
 			console.log("smalnum");
 			return 0
 		}if (bignum == searchTerm) {
 			console.log("big num");
 			return array.length-1
 		} else {

	for (let index = length*2; index > 0; index--) {
	arraynum = array[num]
		if (index>=rum) {
 			if(arraynum < searchTerm) {num = Math.round(num*(3/2))
 			}if(arraynum> searchTerm || num > length) {num = Math.round(num/2)}
 			if (arraynum == searchTerm) {return num}	 
 		}else{
 			if (arraynum >= searchTerm || num > length) {
				if (arraynum == searchTerm) {return num}
			num = num-index
 			}else{
 			num= num+index
				if (arraynum == searchTerm) {return num}

			}
		}
	}
}
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end
	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	 
}
module.exports = binarySearch;