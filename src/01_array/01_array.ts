import { strict as assert } from "assert";

// Challenge 11: Find Pairs with Given Sum
// Given an array of numbers, find all unique pairs that sum up to a target value.
// Input: ([1, 2, 3, 4, 5], 5)
// Output: [[1, 4], [2, 3]]
function findPairsWithSum(arr: number[], target: number): number[][] {
  // Your code here
}

// Challenge 12: Flatten Deep Nested Arrays
// Flatten a deeply nested array into a single array.
// Input: [1, [2, [3, [4]]]]
// Output: [1, 2, 3, 4]
function flattenDeepArray(arr: any[]): number[] {
  // Your code here
}

// Challenge 13: Remove Duplicates from Array
// Given an array of numbers, return a new array with duplicate values removed.
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]
function removeDuplicates(arr: number[]): number[] {
  // Your code here
}

// Challenge 14: Group Anagrams
// Given an array of strings, group anagrams together.
// Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
// Output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
function groupAnagrams(arr: string[]): string[][] {
  // Your code here
}

// Challenge 15: Rotate Array
// Rotate an array to the right by `k` steps.
// Input: ([1, 2, 3, 4, 5], 2)
// Output: [4, 5, 1, 2, 3]
function rotateArray(arr: number[], k: number): number[] {
  // Your code here
}

// Challenge 16: Chunk Array
// Given an array and a chunk size, return an array of arrays where each subarray has the specified chunk size.
// Input: ([1, 2, 3, 4, 5, 6, 7], 3)
// Output: [[1, 2, 3], [4, 5, 6], [7]]
function chunkArray(arr: number[], size: number): number[][] {
  // Your code here
}

// Challenge 17: Find Longest Consecutive Sequence
// Given an unsorted array of numbers, find the length of the longest consecutive elements sequence.
// Input: [100, 4, 200, 1, 3, 2]
// Output: 4 (because [1, 2, 3, 4] is the longest consecutive sequence)
function longestConsecutiveSequence(arr: number[]): number {
  // Your code here
}

// Challenge 18: Merge Intervals
// Given a collection of intervals, merge all overlapping intervals.
// Input: [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output: [[1, 6], [8, 10], [15, 18]]
function mergeIntervals(intervals: number[][]): number[][] {
  // Your code here
}

// Challenge 19: Find Missing Number in Range
// Given an array containing n distinct numbers in the range [0, n], find the one that is missing.
// Input: [3, 0, 1]
// Output: 2
function findMissingNumber(arr: number[]): number {
  // Your code here
}

// Challenge 20: Find Kth Largest Element
// Find the k-th largest element in an unsorted array.
// Input: ([3, 2, 1, 5, 6, 4], 2)
// Output: 5
function findKthLargest(arr: number[], k: number): number {
  // Your code here
}

export function execute01Array() {
  // Test case for Challenge 11
  assert.deepEqual(findPairsWithSum([1, 2, 3, 4, 5], 5), [
    [1, 4],
    [2, 3],
  ]);

  // Test case for Challenge 12
  assert.deepEqual(flattenDeepArray([1, [2, [3, [4]]]]), [1, 2, 3, 4]);

  // Test case for Challenge 13
  assert.deepEqual(removeDuplicates([1, 2, 2, 3, 4, 4, 5]), [1, 2, 3, 4, 5]);

  // Test case for Challenge 14
  assert.deepEqual(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"],
  ]);

  // Test case for Challenge 15
  assert.deepEqual(rotateArray([1, 2, 3, 4, 5], 2), [4, 5, 1, 2, 3]);

  // Test case for Challenge 16
  assert.deepEqual(chunkArray([1, 2, 3, 4, 5, 6, 7], 3), [
    [1, 2, 3],
    [4, 5, 6],
    [7],
  ]);

  // Test case for Challenge 17
  assert.equal(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]), 4);

  // Test case for Challenge 18
  assert.deepEqual(
    mergeIntervals([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ]),
    [
      [1, 6],
      [8, 10],
      [15, 18],
    ]
  );

  // Test case for Challenge 19
  assert.equal(findMissingNumber([3, 0, 1]), 2);

  // Test case for Challenge 20
  assert.equal(findKthLargest([3, 2, 1, 5, 6, 4], 2), 5);

  console.log("All test cases passed!");
}
