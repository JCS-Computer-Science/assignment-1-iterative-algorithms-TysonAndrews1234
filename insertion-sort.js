function insertionSort(array) {
	let num = 0
	let check = 1 
	while (check == 1 ) {
		check = 0 
		
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		const element2 = array[index+1]
		if (element2 < element){
			array.splice(index,2,element2,element)
			check = 1 
		}
	}	
num++

}
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */


}

module.exports = insertionSort;
