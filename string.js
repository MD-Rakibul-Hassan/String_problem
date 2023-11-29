
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

// 6. Write a JavaScript function that hides email addresses to prevent unauthorized access.

function protect_email (email) {
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validEmail)) {
        let splitEmail = email.split("@");
        let firstPartOfEmail = splitEmail[0].slice(0,splitEmail[0].length / 2);
        let secondPartOfEmail = splitEmail[1];
        let protectedEmail = firstPartOfEmail.concat("...@",secondPartOfEmail);
        console.log(protectedEmail)
    }else {
        console.log("Enter a valid email")
    }
}

protect_email("mdrakibulhassan2425@gmail.com");

// 7. Write a JavaScript function to parameterize a string.
function string_parameterize (parametr) {
    const parameterize = parametr.toLowerCase().replace(/ /g, "-");
    console.log(parameterize)
}
string_parameterize("My name is rakibul hassan shehab");

// Write a JavaScript function to capitalize the first letter of a string.

function capitalize (name) {
    if (name) {
        let capitalLetter =  name.split("");
        let firstLetter = capitalLetter[0].toUpperCase();
        capitalLetter[0] = firstLetter;
       let firstCaptalLetter = capitalLetter.join("");
       console.log(firstCaptalLetter)
    }else {
        console.log("Please enter a valid string")
    }
}
capitalize ("shehab")