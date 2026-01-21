// Declaring variables in TS
// using var, let, const
var num = 5;
num = 10; // now num is 10
var text = 'Hi Suman';
var isLoggedIn = true;
var pi = 3.14;
// functions in TS
// functions are declared by defining the type of parameters and return type 
function displayData(name, age) {
    return "My name is ".concat(name, " and I am ").concat(age, " years old");
}
displayData('Suman', 24);
// any datatype is used when we are not sure about the type of variable. It allows you to assign any type of value to the variable.
var studentData = "{\n    \"studentName\": \"Suman\",\n    \"studentId\": 2601,\n    \"isEnrolled\": true\n}";
var student = JSON.parse(studentData);
console.log(student.studentName); // This prints Suman
//void datatype is used when a function does not return any value
function logMessage(message) {
    console.log(message);
}
logMessage('Hello, this is a log message.');
//object datatype
var person = { name: 'Suman', age: 24 };
// You can add optional properties to a TS object. Here id is an optional property that may or may not be present in the object. 
// This is indicated by the ? after id and it prevents errors when accessing the id property if it is not defined. 
console.log(person); // This prints { name: 'Suman', age: 24 }
person.id = 2601; // adding id property to the object
console.log(person.id); // This prints 2601
console.log(person); // This prints { name: 'Suman', age: 24, id: 2601 }
var Suman = { name: "Suman", id: 2601 }; //initially Suman is of type user and later we change it to Admin 
Suman = { userName: "sy", id: 2601 }; // now Suman is of type Admin because it matches the Admin type structure 
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else if (typeof id === "number") {
        id.toPrecision();
    }
}
getDbId(123); // This prints 123
getDbId("ABC123"); // This prints ABC123
var emp1 = { empName: "Suman", empId: 2601, isPermanent: true }; // using the Employee type alias to declare emp1 variable
console.log(emp1); // This prints { empName: 'Suman', empId: 2601, isPermanent: true }
// noImplictAny is a TS compiler option that raises an error when a variable is declared without an explicit type annotation. 
// We use it to avoid unintended any types in our code and improve type safety.
// Example:
var randomValue; // This will throw an error if noImplicitAny is enabled because randomValue has no type annotation
randomValue = 10;
randomValue = "Hello"; // randomValue can hold any type of value which defeats the purpose of type safety
// Difference between for and forEach loop is that for loop is a traditional loop that allows you to iterate over an array using an index,
// whereas forEach is a higher-order function that takes a callback function and executes it for each element in the array.
// Why use one over the other?
// for loop gives more control over the iteration process, allowing you to break or continue the loop based on conditions.
// forEach is more concise and easier to read, especially for simple iterations where you just want to perform an action on each element.
// When to use which depends on the specific use case and personal preference like if you need more control, use for loop; if you want cleaner code, use forEach.
// Example:
var numbers = [1, 2, 3, 4, 5];
// Using for loop
for (var i = 0; i < numbers.length; i++) {
    console.log("For Loop Value: ".concat(numbers[i]));
}
// Using forEach loop
numbers.forEach(function (num) {
    console.log("forEach Loop Value: ".concat(num));
});
//Never type is used to represent values that never occur. For example, a function that always throws an error or a function that never returns a value.
function throwError(message) {
    throw new Error(message);
}
// The function throwError will never return a value because it always throws an error.
// Difference between never and void is that void represents the absence of a value, typically used for functions that do not return anything,
// whereas never represents a value that never occurs, used for functions that always throw an error or never return or infinite loops.
// Use never when you want to indicate that a function will not complete normally, and use void when you want to indicate that a function does not return a value.
// Arrays and strict value assignments
var data = [1, 2, 3];
var data2 = ["a", "b", "c"];
var data3 = [1, 2, 3];
//data3 means that it can either contain all string values or all number values but not a mix of them
var data4 = [1, "a", true];
//data4 can have a mix of different datatypes in a single array
//strict value assignments
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"; //this throws error because we have specified that seatAllotment can only have those 3 values   
console.log(seatAllotment); // This prints aisle 
//enums in TS
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var move = Direction.Up;
console.log(move); // This prints UP
move = Direction.Left;
console.log(move); // This prints LEFT  
function displayProduct(_a) {
    var productId = _a.productId, productName = _a.productName, price = _a.price;
    console.log("ProductId is ".concat(productId, ", product name is ").concat(productName, " and price is ").concat(price));
}
var prod = { productId: 2601, productName: 'Laptop', price: 1500 };
displayProduct(prod); // This prints Product ID: 101, Product Name: Laptop, Price: 1500
// Parameter destructuring allows you to extract properties from an object directly in the function parameters, 
// making the code more concise and readable by avoiding repetitive access to object properties within the function body. 
// It also helps in clearly defining which properties are expected by the function.
