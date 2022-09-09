// What project are you currently working on?

// console.log(0.1 + 0.2)

// // Design a wait list for customers at restaurant:

// // Add customers to wait list (for example: Bob, party of 4 people)
// // Remove a customer from wait list
// // Given a open table with N seats, remove and return the first customer party of size less or equal to N

// Queue -
// [ ‘Bob”, ‘Travis’, Samantha  ]
// Class queue{
// 	constructor(){
// 		This.queue = [];
// 		This.map = {}
// 	}

// 	add(name, size) {
// 	this.queue.push([name, size])
// 	This.map[name] = true
// }
// 	remove(name){
// 		for(let i = 0; i < this.queue.length; i++){
// 			if(queue[i][name]){
// 			Let slice1 = this.queue.slice(0, i);
// 			slice1.concat(i+1, queue.length);
// }
// 		}

// 		This.map[name] = false
// 	}

// 	serve(table){
// 		for(let i = 0; i < this.queue.length; i++){
// 			if(this.map[this.queue[i]) === true && this.queue[i][1]  <= table){
// 				Let result = this.queue[i];
// 				remove(this.queue[i]);
// 				Return result;
// 			}
// 		}
// }
// }
// [ [bob, 2], [tim, 4], [test, 1] ]

// const test = [ 1, 2, 3, 4, 5 ]
// //2
// // [ 3, 4, 5, 1, 2]

// // 3
// [4.5,1,2,3]

// let new = slice(0, 2);
// arr = [3,4,5]
// For new

// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Example 1:
// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

// Example 2:
// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]

// Input: nums1 = [3,2,4], nums2 = [3,2,4,1]
// Output: [4, 4,-1]

// Function nextGreater(arr1, arr2){

// 	Let map = {}; // number : next number / -1
// 	Let stack = [];
// 	Let result = [];

// 	for(let i = 0; i < arr2.length; i++){
// 		stack.push(arr2[i])
// 	}
// }

// var nextGreaterElement = function(nums1, nums2) {

//     const stack = []
//     const map = {}

//     for (let num of nums2) {

//         while(stack.length > 0 && num > stack[stack.length - 1]) {

//             map[stack.pop()] = num

//         }

//         stack.push(num)
//     }

//     // console.log(map)
//     // console.log(stack)

//     for (let i = 0; i < nums1.length; i++) {

//         nums1[i] = map[nums1[i]] ? map[nums1[i]] : -1

//     }

//     // nums1.map(a => map[a] ? map[a] : -1)
//     return nums1
// };
