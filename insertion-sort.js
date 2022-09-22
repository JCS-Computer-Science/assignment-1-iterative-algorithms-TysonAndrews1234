function insertionSort(array) {
	
	let joint = 0
	let element = array[0];
	let element2 = array[0]
	let otherindex = 0
	for (let index = -1; index < array.length; index++) {
		joint = 0 
		otherindex = 0 + index
		let num = 1
		console.log(index +" index");
		while (num == 1) {
			if (joint == 10){
				break
			}
		element = array[otherindex];
		element2 = array[otherindex+1]
			if (element > element2){
				console.log(array);
				array.splice(index,2,element2,element)
				console.log(array);
				num = 1
				otherindex--
				
			}else{
					otherindex+1
					joint++
					if (otherindex == array.length){
						num = 0 
					}
				}
			
		
			}
			
	}
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
return array
}

module.exports = insertionSort;
