
// Apr 8, 2022

// Given two strings first and second, consider occurrences in some text of the form 
// "first second third", where second comes immediately after first, and third comes immediately after second.

// Return an array of all the words third for each occurrence of "first second third".

// Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
// Output: ["girl","student"]

// Input: text = "we will we will rock you", first = "we", second = "will"
// Output: ["we","rock"]


// splitting this into an array of words 
// first and second, we can check for each concurrent word if they match 
// if first and second = array <- third word
// return the array of third word

Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
Output: ["girl","student"]
A a a a a a 
function third_word( string, first, second) {

	let result = []; // girl, student
	let words = string.split(" ");  //n constant
	I = 0;

	while(i < words.length){ 
		if(words[i] === first && i+1 < words.length){ // 
			if(words[i+1] === second &&  i+2 < words.length){
				result.push(words[i+2]);	
			}
	}
		i++;
	}
	return result;
}
// Time = n 
// Space = n
