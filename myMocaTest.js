"use strict";
const assert = require("assert");
const test = require("./18QuestionExercise.js");

/*eslint-disable*/

// 1. A porcupine number is a prime number whose last digit is 9 and the next prime number that
// follows it also ends with the digit 9. For example, 139 is a porcupine number because:
// a. it is a prime
// b. it ends in a 9
// c. The next prime number after it is 149 which also ends in 9.
// Write a method named findPorcupineNumber which takes an integer argument n and
// returns the first porcupine number that is greater than n. So findPorcupineNumber(0)
// would return 139 (because 139 happens to be the first porcupine number) and so would
// findPorcupineNumber(138). But findPorcupineNumber(139) would return 409 which
// is the second porcupine number.

describe("porcupine number", function () {
  it("the first porcupine number is 139", function () {
    function findPorcupineNumber(num) {}
    assert.strictEqual(test.findPorcupineNumber(3), 139);
  });

  it("the second porcupine number is 409", function () {
    function findPorcupineNumber(num) {}
    assert.strictEqual(test.findPorcupineNumber(139), 409);
  });

  it("the first porcupine number is 139", function () {
    function findPorcupineNumber(num) {}
    assert.strictEqual(test.findPorcupineNumber(138), 139);
  });
});

// 2. Given an array of integers nums and an integer target, return indices of the two numbers such
// that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the
// same element twice. You can return the answer in any order.

describe("sum to target", function () {
  it("Index of the numbers whose sum is 9 is [0,1]", function () {
    assert.deepStrictEqual(test.addToTarget([2, 7, 11, 15], 9), [0, 1]);
  });

  it("Index of the numbers whose sum is 6 is [0,2]", function () {
    assert.deepStrictEqual(test.addToTarget([2, 3, 4], 6), [0, 2]);
  });

  it("Index of the numbers whose sum is 6 is [0,1]", function () {
    assert.deepStrictEqual(test.addToTarget([3, 3], 6), [0, 1]);
  });
});

// 3. Write a function named mostFrequent() that given an array, finds the most frequent element
// in it. If there are multiple elements that appear maximum number of times, returns any one of
// them

describe("Most frequent", function () {
  it("The most frequent in the list is 4", function () {
    assert.strictEqual(test.mostFrequent([4, 3, 6, 8, 3, 8, 4, 9, 6, 4]), 4);
  });
});

// 4. Given an array of integers, write a function that finds the pair in array whose sum is closest to 0.
// If there are more than one pair, return any pair.
// For e.g., [4,2, -1,3,-2,-3] → [2,-2]

describe("sum closest to zero", function () {
  it("pair whose sum is closest to zero is [2,-2]", function () {
    assert.deepStrictEqual(test.closestToZero([4, 2, -1, 3, -2, -3]), [2, -2]);
  });

  it("pair whose sum is closest to zero is [1, -1] ", function () {
    assert.deepStrictEqual(test.closestToZero([1, 4, -1, -2, -5]), [1, -1]);
  });
});