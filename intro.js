// Declaring variables in TS
// using var, let, const
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
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
// Modules in TS
// Modules are used to create a collection of multiple data types, functions, classes, etc., in a single file and export them to be used in other files.
// They have their own scope and help in organizing code better. 
// namespace is used to group related functionalities together. We can't use module keyword in TS anymore.
var MathUtils;
(function (MathUtils) {
    function add(a, b) {
        return a + b;
    }
    MathUtils.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathUtils.subtract = subtract;
})(MathUtils || (MathUtils = {}));
console.log(MathUtils.add(5, 3)); // This prints 8
console.log(MathUtils.subtract(5, 3)); // This prints 2 
// ts.config.json is used to configure the TS compiler options like target version, module system, strict type checking, etc.
// It helps in customizing the compilation process according to the project requirements. It also makes the working directory as the root directory for the TS project.
// Decorators in TS
// Decorators are special types of declarations that can be attached to classes, methods, properties, or parameters to modify their behavior.
// They are prefixed with @ symbol and are used for meta-programming. Decorators can be used for logging, validation, authorization, etc.
// Example of a class decorator
function Logger(constructor) {
    // We can also pass specific class types instead of Function type.
    console.log("Class created: " + constructor.name);
    // constructor.name gives the name of the class being decorated which is PersonClass in this case.
}
var PersonClass = function () {
    var _classDecorators = [Logger];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var PersonClass = _classThis = /** @class */ (function () {
        function PersonClass_1(name, age) {
            this.name = name;
            this.age = age;
        } // Here we are passing constructor function as an argument to the Logger decorator. 
        return PersonClass_1;
    }());
    __setFunctionName(_classThis, "PersonClass");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PersonClass = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PersonClass = _classThis;
}();
var personInstance = new PersonClass("Suman", 24); // This prints Class created: PersonClass. We are creating an instance of PersonClass here.
console.log(personInstance); // This prints PersonClass { name: 'Suman', age: 24 }
//Condtional type checking does not happend at runtime, its a compile time check.
// All the best for your TypeScript journey!
