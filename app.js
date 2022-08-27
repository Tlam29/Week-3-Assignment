//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93
let ages= [3, 9, 23, 64, 2, 8, 28, 93];
//Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
console.log(ages[0]-ages[ages.length-1]);
//Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages[8] = 21;
console.log(ages[0]-ages[ages.length-1]);
//Use a loop to iterate through the array and calculate the average age. Print the result to the console.
var total =0;
for(var i = 0; i < ages.length; i++){
    total += ages[i];
}
var avg = total/ages.length;
console.log(avg);

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
var totalLetters = 0;
var length = names.length;
for(var i = 0; i < names.length; i++){
    totalLetters += names[i].length;
}
var avgLetters = totalLetters/names.length;
console.log(avgLetters);
//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
let joined = "";
for(var i = 0; i < names.length; i++){
    joined = (names.join(' '));
}
console.log(joined);
//How do you access the last element of any array?
var last = names[names.length -1];
//How do you access the first element of any array?
var first = names[0];
//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
var nameLengths = [];
		for (var i = 0; i < names.length; i++) {
            nameLengths[i]= names[i].length;
		}
        //nameLengths.push(nameLengths[i]);
       console.log(nameLengths);
        
//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
var sum = 0;
for(var i = 0; i < nameLengths.length; i++){
    sum += nameLengths[i];
}
    console.log(sum);
//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function greeting (word, n){
    let randomWord = '';
    for(i=0; i < n; i++){
        randomWord += word;}
        return randomWord;
    }
console.log(greeting("Hello",3));
//Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function fullName (firstName, lastName){
    fullName = firstName + " " + lastName;
    return fullName;
}
console.log(fullName("Tyson", 'Lam'));
//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function greaterThanHundred (array){
    let sumOfArray = 0;
    for(var i = 0; i < array.length; i++){
        sumOfArray += array[i];
    }
    return sumOfArray > 100;
}
console.log(greaterThanHundred(ages));
//Write a function that takes an array of numbers and returns the average of all the elements in the array.
function avgOfArray (array){
    let avgOfArray = 0;
    for(var i = 0; i < array.length; i++){
       avgOfArray += array[i];
    }
    return avgOfArray/array.length;
}
console.log(avgOfArray(ages));
//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compareArray (array1,array2){
   return avgOfArray(array1) > avgOfArray(array2);
}
let array2 = [150,200,210]
console.log(compareArray(ages,array2));
//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside,moneyInPocket){
   return isHotOutside && moneyInPocket > 10.50
}
console.log(willBuyDrink(true,9));
//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function enoughForSwich(costOfSwitch,moneyInPocket){   //Function checking if you have enough money
    if(moneyInPocket > costOfSwitch){               //Checking if you have enough money for a switch
        console.log("YOU HAVE ENOUGH!")
    }else{
        console.log("Keep working!")    
    }
}
enoughForSwich(300,310);                        //Calling the funciton