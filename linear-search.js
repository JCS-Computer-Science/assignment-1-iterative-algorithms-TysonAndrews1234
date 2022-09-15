function linearSearch(array, searchTerm) {
	let num = 0 
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		if (element == searchTerm) {
			num = index
		}
	}
	
	
	/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */

	return num;
}

module.exports = linearSearch;
