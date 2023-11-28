
// 1. Write a JavaScript function to check whether an 'input' is a string or not.
function isString (str) {
    if(str === String(str)) {
        console.log("Wellcome....")
    }
    else {
        console.log("Please enter a strnig")
    }
}
isString("Hi How Are You");
isString([20,30,40]);

// Same problem solve another way
function isString_2 (string) {
    if (Object.prototype.toString.call(string) === '[object String]') {
        console.log("Your are right.....")
    }else {
        console.log("Worning! please enter a string")
    }
}
isString_2("I love my self");
isString_2(20);

// 2. Write a JavaScript function to check whether a string is blank or not.
function isBlank (string)  {
    if(Object.prototype.toString.call(string) === "[object String]") {
        if(string.length) {
            console.log(`You have enter ${string}`)
        }else {
            console.log("The string is blank please enter a meaningful string")
        }
    }else {
        console.log("Please enter a string....")
    }
}
isBlank("");
isBlank(10)
isBlank("My name is Rakibul Hassan");

// 3. Write a JavaScript function to split a string and convert it into an array of words.
function convertToArray (string) {
    console.log(string.split(" "))
}
convertToArray("Rakibul Hassan");

// 4. Write a JavaScript function to extract a specified number of characters from a string.
function extractCharacters (string,number) {
    console.log(string.slice(0,number))
}
extractCharacters("Rakibul Hassan Shehab",7)

// 5. Write a JavaScript function to convert a string into abbreviated form.
function abbreviatedName (name) {
    if (name.includes(" ")) {
        let abbreviated = name.split(" ")
        console.log(abbreviated)
        let firstIndex;
        let firstLetter;
        for (let i = 0; i < abbreviated.length; i++) {
            firstIndex = abbreviated[0];
            firstLetter = abbreviated[1].slice(0,1)
        }
        let abbreviated_Name = `${firstIndex} ${firstLetter}.`;
        console.log(abbreviated_Name)
    }else {
        console.log("Please enter two name linke " +"Jhon doe")
    }
}
abbreviatedName("Jhon doe")

