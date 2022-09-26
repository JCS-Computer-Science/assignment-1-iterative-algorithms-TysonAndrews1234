function linearSearch(array, searchTerm) {
	let num = 0 
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		if (element == searchTerm) {
			num = index
		}
	}
	return num;
}

module.exports = linearSearch;
