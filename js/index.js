//Ключові слова для змінних:
// var, let, const
let message ="Hello";
alert(message);
message = "World!";
alert(message);
const year= 2019;
alert(year);

const nextYear = year + 1;
message = "Next year will be: "+ nextYear ;
alert(message)

const userName = prompt("Enter your name");
alert("Hello," + userName);

const userAge = parseFloat (prompt("Enter your age"));
const nextAge = addOne(userAge);
alert("Next year you will have: " + nextAge );

if (userAge < 18 ) {
    alert("You are underaged, sorry")
} else {
    alert("Congratulation, go to work")
}

function addOne(num) {
    const result = num + 1;
    return result;
}

//All scalar data types in JS:
//Stirng
//Number
//Boolean
//Underfined
//Null
//Object
//Symbol
// > < <= >= === !== || &&