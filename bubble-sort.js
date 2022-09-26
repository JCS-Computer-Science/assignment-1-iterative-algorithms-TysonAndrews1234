function bubbleSort(array) {
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

}
if (check == 0) {
	return array;
}
	return array;
}

module.exports = bubbleSort;
