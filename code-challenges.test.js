// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { it, expect } = require("@jest/globals")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

//Follow Red, Green, Refactor
//describe,it,expect,toEqual required
//review url provided
//describe removeOneShuffle
//it  takes in an array, removes the first item from the array and shuffles the remaining content
//expect ["purple", "blue", "green", "yellow", "pink"]
//toEqual ["yellow", "blue", "pink", "green"]

describe("removeOneShuffle", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
        expect(removeOneShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(removeOneShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
})
//  ReferenceError: removeOneShuffle is not defined
const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// b) Create the function that makes the test pass.

//ill create the removeOneShuffle and have it map the value after shift has removed the first index and put it into a newvalue
//map will take the value and index of each item and use it to randomize its return
//randomize its return will be done by using two random numbers and placing them in that order 
//
const removeOneShuffle = (coconut) => {
    coconut.shift
    newCoconut = coconut
    newCoconutShuffle = []
    newCoconut.map((lime,index) => {
        random1 =   Math.floor(Math.random())  
        random2 =   Math.floor(Math.random())  
        if (random1 >= random2){
            return newCoconutShuffle.push(lime)
        }else{
            return newCoconutShuffle.unshift(lime)
        }
    })
    return newCoconutShuffle
}


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

//Follow Red, Green, Refactor
//describe,it,expect,toEqual required
//describe lowHigh
//it takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
//expect [3, 56, 90, -8, 0, 23, 6]
//toEqual [-8, 90]
describe ("lowHigh", () => {
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () =>{
        expect(lowHigh(nums1)).toEqual([-8, 90])
        expect(lowHigh(nums2)).toEqual([5, 109])
    })
})


const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

// b) Create the function that makes the test pass.
//I'll do individual holders for the highest and lowest numbers
//I'll use an if statement to find them
//a return outside of the loop will give the result of low and high in an array

const lowHigh = (potato) => {
    lowNum = potato[0]
    highNum = potato[1]
    for(let i= 0; i < potato.length; i++){
        if(potato[i] < highNum ){
            if(potato[i] < lowNum){
                lowNum = potato[i]
            }
        }else{
           highNum = potato[i]
        }
    }
     return result = [lowNum, highNum]
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

//Follow Red, Green, Refactor
//describe,it,expect,toEqual required
//describe oneFromTwo
//it takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
//expect testArray1,testArray2
//toEqual [3, 7, 10, 5, 4, 8, 2, 1]

describe ("oneFromTwo", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.", () =>{
        expect(oneFromTwo(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// b) Create the function that makes the test pass.

//combine both arrays into one
//filter using another array as a check if its been used before

const oneFromTwo = (mom,dad) => {
    return hello = mom.concat(dad).filter((value, index) =>{
        if(index === mom.concat(dad).indexOf(value)){
            return value
        }
    })
}