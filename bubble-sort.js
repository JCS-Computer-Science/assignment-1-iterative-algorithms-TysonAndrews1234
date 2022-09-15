function bubbleSort(array) {
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
if (check == 0) {
	return array;
}
   
    
    
    
    
    /*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

	return array;
}

module.exports = bubbleSort;
