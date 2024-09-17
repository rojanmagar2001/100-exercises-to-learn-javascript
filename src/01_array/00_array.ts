/// Challenge Comment all these and start one by one



// Challenge 1: Square Each Element
// Function that returns a new array with each element squared.
// Input: [1, 2, 3, 4]
// Output: [1, 4, 9, 16]
function squareElements(arr: number[]): number[] {
  // Your code here
}

// Challenge 2: Filter Even Numbers
// Function that filters out only the even numbers from the array.
// Input: [1, 2, 3, 4, 5]
// Output: [2, 4]
function filterEvenNumbers(arr: number[]): number[] {
  // Your code here
}

// Challenge 3: Find First Negative Number
// Function that finds the first negative number in the array.
// Input: [3, 5, -1, 4]
// Output: -1
function findFirstNegative(arr: number[]): number | undefined {
  // Your code here
}

// Challenge 4: Sum of All Elements
// Function that returns the sum of all elements in the array.
// Input: [1, 2, 3, 4]
// Output: 10
function sumOfElements(arr: number[]): number {
  // Your code here
}

// Challenge 5: Count Occurrences of Elements
// Function that returns an object counting occurrences of each element.
// Input: ['a', 'b', 'a', 'c', 'b', 'a']
// Output: {a: 3, b: 2, c: 1}
function countOccurrences(arr: string[]): Record<string, number> {
  // Your code here
}

// Challenge 6: Filter Names Longer Than 3 Characters
// Function that filters out names with more than 3 characters.
// Input: ['Tom', 'Max', 'Sam', 'Jonathan']
// Output: ['Tom', 'Max', 'Sam']
function filterShortNames(arr: string[]): string[] {
  // Your code here
}

// Challenge 7: Check if All Numbers Are Positive
// Function that checks if all numbers in the array are positive.
// Input: [1, 2, 3, 4]
// Output: true
// Input: [1, -2, 3]
// Output: false
function areAllPositive(arr: number[]): boolean {
  // Your code here
}

// Challenge 8: Find Maximum Number
// Function that finds the maximum number in the array.
// Input: [1, 5, 3, 9, 2]
// Output: 9
function findMaxNumber(arr: number[]): number {
  // Your code here
}

// Challenge 9: Flatten Nested Arrays
// Function that flattens a nested array of numbers.
// Input: [[1, 2], [3, 4], [5]]
// Output: [1, 2, 3, 4, 5]
function flattenArray(arr: number[][]): number[] {
  // Your code here
}

// Challenge 10: Group Numbers By Even or Odd
// Function that groups numbers into even and odd.
// Input: [1, 2, 3, 4, 5]
// Output: { even: [2, 4], odd: [1, 3, 5] }
function groupByEvenOdd(arr: number[]): { even: number[]; odd: number[] } {
  // Your code here
}





// Function to execute all the challenges
export function executeArray00() {
  console.log("01 Array Challenge: ")

  // Challenge 1: Square each element
  // Input: [1, 2, 3, 4]
  console.log("Square Elements:", squareElements([1, 2, 3, 4]));

  // Challenge 2: Filter even numbers
  // Input: [1, 2, 3, 4, 5]
  console.log("Filter Even Numbers:", filterEvenNumbers([1, 2, 3, 4, 5]));

  // Challenge 3: Find first negative number
  // Input: [3, 5, -1, 4]
  console.log("Find First Negative:", findFirstNegative([3, 5, -1, 4]));

  // Challenge 4: Sum of all elements
  // Input: [1, 2, 3, 4]
  console.log("Sum of Elements:", sumOfElements([1, 2, 3, 4]));

  // Challenge 5: Count occurrences of elements
  // Input: ['a', 'b', 'a', 'c', 'b', 'a']
  console.log("Count Occurrences:", countOccurrences(['a', 'b', 'a', 'c', 'b', 'a']));

  // Challenge 6: Filter names longer than 3 characters
  // Input: ['Tom', 'Max', 'Sam', 'Jonathan']
  console.log("Filter Short Names:", filterShortNames(['Tom', 'Max', 'Sam', 'Jonathan']));

  // Challenge 7: Check if all numbers are positive
  // Input: [1, 2, 3, 4]
  console.log("Are All Positive (All Positive Case):", areAllPositive([1, 2, 3, 4]));

  // Input: [1, -2, 3]
  console.log("Are All Positive (Contains Negative Case):", areAllPositive([1, -2, 3]));

  // Challenge 8: Find maximum number
  // Input: [1, 5, 3, 9, 2]
  console.log("Find Max Number:", findMaxNumber([1, 5, 3, 9, 2]));

  // Challenge 9: Flatten nested arrays
  // Input: [[1, 2], [3, 4], [5]]
  console.log("Flatten Array:", flattenArray([[1, 2], [3, 4], [5]]));

  // Challenge 10: Group numbers by even or odd
  // Input: [1, 2, 3, 4, 5]
  console.log("Group By Even or Odd:", groupByEvenOdd([1, 2, 3, 4, 5]));
}

