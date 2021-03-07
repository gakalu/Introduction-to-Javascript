"use strict";
const assert = require("assert");
const arrays = require("../Asignw2d5");
const isArrayEqual= require("../Asignw2d5").isArrayEqual;

/* Write a function, isArrayEqual, that returns true if two arrays have === elements, else false; */
describe("isArrayEqual", function () {

    it("Either true or false", function () {
        assert.deepStrictEqual(arrays.isArrayEqual(([1, 2, 5],[1,2,5]),ture));
    });
 
});
/* Write a function that checks if an array is palindrome by using push and pop array methods to 
reverse the array and then isArrayEqual method you wrote for 1*/ 
describe("checkspalindrome", function () {

    it("check for palandrom", function () {
        assert.deepStrictEqual(arrays.checkspalindrome(([5, 3, 5,3,5]),true));
    });
 
});
/* Write a function that transforms a given array as following. Use appropriate array methods.
Input (Array)  ['Quick', 'Brown', 'Fox']
Output (String) "Fox_Brown_Quick" */
describe("transform", function () {

    it("Check for changed format", function () {
        assert.deepStrictEqual(arrays.transform(['Quick', 'Brown', 'Fox'],Fox_Brown_Quick));
    });
 
});
/* Write a JavaScript function named enhancedIncludes that takes two parameters, an array, and a 
value to search in the array and return an array result with three values.*/
describe("enhancedInclude", function () {

    it("Check for inclustion of a value", function () {
        assert.deepStrictEqual(arrays.enhancedInclude(([1, 2, 5],5)),[true,-1,5]);
    });
 
});
/* Write a function that returns reversed copy of a given array (original array should 
remain intact). Do this without using reverse method, instead use splice and slice 
methods.
*/
describe("reversedcopy", function () {

    it("Reverse an array using slice", function () {
        assert.deepStrictEqual(arrays.reversedcopy([1, 2, 5],[5,2,1]));
    });
 
});
describe("mergeArray", function () {

    it("Marge two array and sort", function () {
        assert.deepStrictEqual(arrays.mergeArray([1, 2, 5,8,3,10],[9,8,6,7]),[1,2,3,5,6,7,8,8,9,]);
    });
 
});