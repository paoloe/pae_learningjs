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
        firstName = "John",
        lastName = "Doe"
    };
}