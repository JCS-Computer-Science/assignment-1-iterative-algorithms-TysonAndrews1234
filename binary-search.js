function binarySearch(array, searchTerm) {
let length = array.length
 

if(length % 2 == 0){
let num = length/2 
console.log(num);
 }else{
	let num = Math.round(length/2)
	console.log(num);
 }










}
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */



module.exports = binarySearch;
