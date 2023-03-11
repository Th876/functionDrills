//Homework Function Drills

// 1 . ) Write a function that outputs the sum of the first and the last index of an array.

//1.0 there should be ONE parameter in a function to represent an array
//1. Need to get the first index VALUE of any array by itself, i.e. remove the first item of an array and save it to a variable shift();
//2. Need to get the last element of any array by itself, i.e. remove the last item of an array and save it to a variable pop();
//3. Then add the two elements (the first & the last) together!
//4. Put these into a function with parameters that can remove the first & last element of any list!


function firstAndLastIndexAdd (a) { //parameter represents the array
    let firstIndex = a.shift(); //remove first element of array and store in variable
    let lastIndex = a.pop(); //remove last element of array and store in variable
    let sum = firstIndex + lastIndex; //Values stored? Add the stored values and save in a new variable
        return sum;
    }

    let sum = firstAndLastIndexAdd([3, 2, 3, 4, 5, 5]);//put in your own values to test the function. Ans should be 7.
console.log(sum);

// ex => var sampleArray = [1,2,3,4,5] 
// expected output =>  sum = 6
    
// 2. Write a JavaScript program to find the leap years in a given range of years. 
function range(start, end) { //two parameters for test range; a starting year and an ending year!
    let rangeList = []; //empty list to store future range that users input

    for(let i = start; i <= end; i++) 
    {  
        rangeList.push(i); //push each year user enters into one list
    } 
    
    let storeRange = [];

//test to see if the year entered is a leap year. Any year that is evenly divisible by 4 & 400 but not 100 is a leap year.
function isleapYear(yr) {
        if((yr % 400 == 0) || (yr % 100 != 0) && (yr % 4 == 0)) {
            return yr; //if so return this year & later push it into a 'leap year list to print all leap years to the console'
        } 
} 

//Use .forEach() method to push each year that is a leap year into the new 'leap year' list (storeRange)
    rangeList.forEach(yr => {
        if (isleapYear(yr)) 
            storeRange.push(yr  + " is a leap year");
    });
    
    return storeRange;
}

//enter a range to test leap year function!
console.log(range(2004, 2023)); 

// // 2. Write a JavaScript program to find the leap years in a given range of years. 
// /*
// Any year that is evenly divisible by 4 is a leap year. write this as a function. it's a list, so the function should have ONE parameter. have a list of years [] to test the function in the function's parenthesis when you're calling it. If array's element (functionArrayParameter[element]) is evenly divisble by 4 (%4); so, conditional statement and modulo --> if functionArrayParameter[element] % 4 == 0, then it's a leap year, console.log(array[element] + " is a leap year!"). Iterating through list so array.length*/

// function isLeapyear (a) {
// for(let i = 0; i < a.length; i++) {
//     if(a[i] % 4 == 0){
//         console.log(a[i] + " is a leap year!");
//     }
// } return;
// } 
// isLeapyear([2000, 2001, 2003, 2005, 2008, 2017, 2018, 2019, 2020]); //don't need to console.log, just call the function!


// 3. Write a JavaScript function to sort the following array of objects by title value.
// Sort by the title, not name! 
//Use comparison to compare two different titles
//use < sign (less than sign) means the first character comes BEFORE the letter in the dictionary
//use > sign (greater than sign) means the first character comes AFTER the letter in the dictionary
//-1 means the first goes before the second
//1 means it goes after
//0 means they're equivalent

 var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
    
    library.sort((book1, book2) => {
    if (book1 === book2) {//test if strings are strictly equal
        return 0; //0 if book1 and book2 are equal
    }
return book1.title < book2.title ? -1 : 1;
}); //if book1 comes before book2 alphabetically, print book1 first, if not, print it after, etc.
  
console.log(library);


 // 4. Write a JavaScript program that takes an array with mixed data type and calculate the sum of all numbers.
 // Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25
// Expected Output:
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18
//loop over things if it's a number, and then added them all up

//declare a variable to store the elements that are actually numbers, because as the function loops through the array, it'll add each qualified element and store it in that variable.
//loop over each element of the array. Use .length()
//if the elements of the array === 'number'
//if it is a number, sum += parameter[i]
//return sum; then console.log a mock array of mixed data


function sumNum (x){
    let sum = 0;
    for(let i = 0; i < x.length; i++) {
        if(typeof x[i] === "number") {
            sum+= x[i];
        } 
    } return sum;
};

console.log(sumNum([2, "11", 3, "a2", false, 5, 7, 1]));

// 5. You will be given an array of drinks, with each drink being an object with two properties: name and price. 
   // Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
   // Assume that the following array of drink objects needs to be sorted:
   var drinks = [
    {name: "lime", price: 10},
    {name: "lemonade", price: 50},
  ]
//   example output =>
//   sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
//sort by lowest to highest price
//use same formula for book titles!

drinks.sort((drink1, drink2) => {
    if (drink1 === drink2) {
        return 0;
    }
    return drink1.price < drink2.price ? -1 : 1;
});
// 
console.log(drinks);
