
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

