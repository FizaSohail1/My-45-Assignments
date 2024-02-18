/*Excercise 18: Seeing the World...*/ 

//step 1: creating an array to store the location to visit

let placestovisit: Array<string> = [
    "Iraq",
    "Saudia Arab",
    "Kashmir",
    "Turkey",
    "Swizerland"
];
//printing the array in original order
console.log("Original order:")
console.log(placestovisit);
//step 3:printing  the Array in alphabetical order without modefying the original list
console.log("\n Printing in alphabetical order without modefying the original Array");
console.log([... placestovisit].sort()) // the sort methode is used to print array items in alphabetical order.
// step 4: printing the array still in its original order
console.log("\n Still in alphabeical order")
console.log(placestovisit.sort())
// step 5: printing  the Array in reverse alphabetical order without modefying the original list
console.log("\n Printing in  reverse alphabetical order without modefying the original Array");
console.log([...placestovisit].sort().reverse)
//step 6: printing the array still in its original order again.
console.log("\n again in alphabeical order",placestovisit);
//step 7:• Reverse the orderand Print the array to show the order of list is changed.
console.log("\n Reverse order");
placestovisit.reverse();
console.log(placestovisit);
// step 8: Reverse the order again and print to show that it is in it's original order.
console.log("\n Back to it's original order");
placestovisit.reverse();
console.log(placestovisit);
// Step 9: Sort the array so it’s stored in alphabetical order. Print the array to show order has been changed.
console.log("\n The order has been changed to alphabetical order");
placestovisit.sort();
console.log(placestovisit);
// Step 10: Sort the Array in reverse alphabetical order and print to show that it is changed.
console.log("\n The order is changed to reverse alphabetical order");
placestovisit.reverse();
console.log(placestovisit);


