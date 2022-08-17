// Explain at least 2 principles of OOP.

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1
function maxWater(arr) {
  let highestWater = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let width = right - left;
    let height = Math.min(arr[left], arr[right]);
    let area = width * height;
    highestWater = Math.max(highestWater, area);
    if (arr[left] > arr[right]) left++;
    else right++;
  }
  return highestWater;
}

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

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
//    const stack = []
//    const map = {}
// 4
// 1: 2
// 2: 3
// 3: 4

// Peter's code
for (let num of nums2) {
  while (stack.length > 0 && num > stack[stack.length - 1]) {
    const current = stack.pop();
    map[current] = num;
  }
  stack.push(num);
}

for (let i = 0; i < nums1.length; i++) {
  nums1[i] = map[nums1[i]] ? map[nums1[i]] : -1;
}

function countNode(node) {
  if (!root) return null;

  let left = countNode(node.left);
  let right = countNode(node.right);

  return 1 + Math.max(left, right);
}
