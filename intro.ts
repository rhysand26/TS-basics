// Declaring variables in TS
// using var, let, const

var num: number = 5;
num = 10; // now num is 10
var text: string = 'Hi Suman';
let isLoggedIn: boolean = true;
const pi: number = 3.14;

// functions in TS
// functions are declared by defining the type of parameters and return type 
function displayData(name: string, age: number): string {
    return `My name is ${name} and I am ${age} years old`;
}

displayData('Suman', 24);

// any datatype is used when we are not sure about the type of variable. It allows you to assign any type of value to the variable.

let studentData: string = `{
    "studentName": "Suman",
    "studentId": 2601,
    "isEnrolled": true
}`;

let student: any = JSON.parse(studentData);

console.log(student.studentName); // This prints Suman

//void datatype is used when a function does not return any value
function logMessage(message: string): void {
    console.log(message);
}

logMessage('Hello, this is a log message.');

//object datatype

let person: {name: string, age: number, id?: number} = {name: 'Suman', age: 24}
// You can add optional properties to a TS object. Here id is an optional property that may or may not be present in the object. 
// This is indicated by the ? after id and it prevents errors when accessing the id property if it is not defined. 
console.log(person); // This prints { name: 'Suman', age: 24 }
person.id = 2601; // adding id property to the object
console.log(person.id); // This prints 2601
console.log(person); // This prints { name: 'Suman', age: 24, id: 2601 }

//union datatype allows a variable to hold more than one type of value
//example from union.ts
type user = {
    name:string;
    id: number;
}
type Admin = {
    userName: string;
    id: number;
}
let Suman: user | Admin = {name: "Suman", id:2601} //initially Suman is of type user and later we change it to Admin 

Suman = { userName: "sy", id: 2601} // now Suman is of type Admin because it matches the Admin type structure 
function getDbId(id: number | string){ // id can be either number or string and we handle both cases
    if(typeof id === "string"){
        id.toLowerCase();
    } else if(typeof id === "number"){
        id.toPrecision();
    }
}

getDbId(123);// This prints 123
getDbId("ABC123");// This prints ABC123


// Type aliases are used to create custom types that can be reused throughout the code and improve code readability 
// by giving meaningful names to complex types. This is similar to defining interfaces but type aliases 
// can also be used for primitive types, union types, and tuples whereas interfaces are mainly used for object types. 
type Employee = {
    empName: string;
    empId: number;
    isPermanent: boolean;
} // defining a type alias Employee 
let emp1: Employee = {empName: "Suman", empId: 2601, isPermanent: true}; // using the Employee type alias to declare emp1 variable
console.log(emp1); // This prints { empName: 'Suman', empId: 2601, isPermanent: true }

// noImplictAny is a TS compiler option that raises an error when a variable is declared without an explicit type annotation. 
// We use it to avoid unintended any types in our code and improve type safety.
// Example:
let randomValue; // This will throw an error if noImplicitAny is enabled because randomValue has no type annotation
randomValue = 10;
randomValue = "Hello"; // randomValue can hold any type of value which defeats the purpose of type safety

// Difference between for and forEach loop is that for loop is a traditional loop that allows you to iterate over an array using an index,
// whereas forEach is a higher-order function that takes a callback function and executes it for each element in the array.
// Why use one over the other?
// for loop gives more control over the iteration process, allowing you to break or continue the loop based on conditions.
// forEach is more concise and easier to read, especially for simple iterations where you just want to perform an action on each element.
// When to use which depends on the specific use case and personal preference like if you need more control, use for loop; if you want cleaner code, use forEach.
// Example:
let numbers: number[] = [1, 2, 3, 4, 5];

// Using for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(`For Loop Value: ${numbers[i]}`);
}
// Using forEach loop
numbers.forEach((num) => {
    console.log(`forEach Loop Value: ${num}`);
});

//Never type is used to represent values that never occur. For example, a function that always throws an error or a function that never returns a value.
function throwError(message: string): never {
    throw new Error(message);
}
// The function throwError will never return a value because it always throws an error.
// Difference between never and void is that void represents the absence of a value, typically used for functions that do not return anything,
// whereas never represents a value that never occurs, used for functions that always throw an error or never return or infinite loops.
// Use never when you want to indicate that a function will not complete normally, and use void when you want to indicate that a function does not return a value.

// Arrays and strict value assignments
const data: number[] = [1,2,3];
const data2: string[] = ["a", "b", "c"];
const data3: number[] | string[] = [1,2,3];
//data3 means that it can either contain all string values or all number values but not a mix of them
const data4: (string | number | boolean)[] = [1, "a", true];
//data4 can have a mix of different datatypes in a single array
//strict value assignments
let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment = "crew"; //this throws error because we have specified that seatAllotment can only have those 3 values   
console.log(seatAllotment); // This prints aisle 

//enums in TS
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
let move: Direction = Direction.Up;
console.log(move); // This prints UP
move = Direction.Left;
console.log(move); // This prints LEFT  
// move = "FORWARD"; // This throws error because FORWARD is not a valid value of Direction enum
// Enums are used to define a set of named constants, making the code more readable and maintainable by using meaningful names instead of arbitrary values. 
// They also provide type safety by restricting the values to the defined enum members. 
// Enums are particularly useful when you have a fixed set of related values that you want to group together and refer to by name.
// Difference between enums and type aliases and interfaces is that enums define a set of named constants, 
// type aliases create custom types that can represent primitive types, union types, tuples, or object types, 
// and interfaces define the structure of object types. Enums are used for fixed sets of related values, 
// type aliases for reusable custom types, and interfaces for defining object shapes and contracts.

// Parameters destructuring in TS
// This is a type alias for a Product object
type Product = {
    productId: number;
    productName: string;
    price: number
}

function displayProduct({productId, productName, price}: Product): void{
    console.log(`ProductId is ${productId}, product name is ${productName} and price is ${price}`)
}
const prod: Product = {productId:2601, productName: 'Laptop', price: 1500};
displayProduct(prod); // This prints Product ID: 101, Product Name: Laptop, Price: 1500
// Parameter destructuring allows you to extract properties from an object directly in the function parameters, 
// making the code more concise and readable by avoiding repetitive access to object properties within the function body. 
// It also helps in clearly defining which properties are expected by the function.



