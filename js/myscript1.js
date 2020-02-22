function externalFunction(){
    document.getElementById("txtChg").innerHTML = 
    "Text changed!";
}

// lesson 5: innerHtml output
function fiveplussix(){
    document.getElementById("plusplus").innerHTML = 
    5 + 6;
}

// lesson 5: document.write output
function l5docwrite(){
    document.write(5 + 6);
}

// lesson 5: using window.alert()
function l5windowalert(){
    window.alert(5 + 6);
}

// lesson 5: using console.log()
function l5consolelog(){
    console.log(5+6);
}

// lesson 5: variables and assignment operators
function l5vars(){
    // variable declaration
    var x, y, z, a, b, c;
    // assigning a value to x
    x = 5;
    // assigning a value to y
    y = 11;
    // assinging z to be x + y
    z = x + y;
    // display the calc to console log
    console.log("5 + 11 = " + z);
    // assigning a value of 10 to a
    a = 10;
    // the below means a = a + 5
    a += 5;
    // display the calc to console log
    console.log("a += 5 = " + a)
}

// lesson 5: variables and objects in JS
function l5vobs(){
    // length is a number
    var length = 5; 
    // lastName is a string
    var lastName = "Espiritu";
    // x is an object and holds two vals
    var x = {
        /* assigning a value to the var note that it is a 
        colon to assign a value not = because this is wrong! */
        firstName: "John",
        // assigning a value to the var lastName
        lastName: "Doe"
    };
}

// lesson 6: using parameters
function l6params(n1, n2){
    // return the value of n1 * n2
    return n1 * n2;
}

// lesson 6: calling the function l6params to change text
function l6myFunc(){
    // change the value of id multip to value of 4 *3
    document.getElementById("multip").innerHTML = l6params(4, 3);
}

// lesson 6: Assigning a function as a value to a variable
function l6funcVal(){
    var x = l6params(999, 999);
    return x;
}

// leeson 7: declaring and assigning variables as objects
function l7obj(){
    var x = {
        // declaring and assigning value
        type:"Seat",
        // declaring and assigning value
        model:"Mii",
        // declaring and assigning value
        color:"White",
        // declaring a method to this object to return all details
        fullDeets(){
            return "Brand = " + this.type + ", Model = " + this.model + 
            ", Colour = " + this.color;
        }
    };

    // retrieving the name of x
    var brandOfX = x.type;
    // retrieving the model of x
    var modelOfX = x.model;
    // retrieving the color of x
    var colorOfX = x.color;

    // returning the value x and calling its method!
    return x.fullDeets();
}

// lesson 7: length of a string parameter
function l7strings(input){
    var txtLen = input.length;
    return txtLen;
}

/* lesson 8: using indexOf to find the index of first occurence of a 
    given string */
function l8indexOf(){
    // sample input string
    var str = "This is the sample text with the word the with multiple occurences!"
    // find the index of first occurence of "the"
    var pos = str.indexOf("the");
    return pos;
}

// lesson 8: similar to above but using lastIndexOf
function l8lastindexOf(){
    // sample input string
    var str = "This is the sample text with the word the with multiple occurences!"
    // find the last occurence index of "is"
    var pos = str.lastIndexOf("is");
    return pos;
}

// lesson 9: converting a number to a string
function l9toString(){
    // sample int input using ES6 syntax
    let x = 123;

    // convert x to string using the method
    console.log(x.toString());
    // prints 123 from literal 123
    console.log((123).toString());
    // prints the string value of 100 + 123
    console.log((100 + 23).toString());

    return "123.toString() = " + x.toString();
}

// lesson 10: arrays the basics
function l10Array(){
    // declaration of the array
    var boxers = ["AJ", "Tyson Fury", "Deontay"];

    return boxers[0];
}