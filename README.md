# TypeScript Introduction

This project demonstrates fundamental TypeScript concepts and syntax. I have written this to skim through it before I give interviews 

## Contents

### Variables & Type Annotations
- **var, let, const** - Different ways to declare variables with different scoping rules
- Type annotations for `number`, `string`, `boolean`, and `any`

### Functions
- Function declaration with parameter and return type annotations
- Void functions (functions that don't return a value)
- Never type (functions that always throw or never return)

### Data Types
- **Primitive types** - number, string, boolean
- **any type** - Used when type is unknown (avoid when possible)
- **void type** - Used for functions with no return value
- **never type** - Used for functions that never return or always throw

### Objects
- Object type annotations with required and optional properties
- Optional properties using `?` operator
- Type aliases for objects

### Union Types
- Variables that can hold multiple types
- Type guards with `typeof` checks
- Combining multiple object types with `|`

### Type Aliases
- Creating custom reusable types
- Difference from interfaces (type aliases work with primitives, unions, tuples)

### Arrays
- Strict array typing (`number[]`, `string[]`)
- Union array types
- Mixed type arrays with `(type1 | type2)[]`

### Literal Types
- Restricting variables to specific values
- Example: `"aisle" | "middle" | "window"`

### Enums
- Defining named constants with string or numeric values
- Benefits: improved readability, type safety, maintainability

### Loops
- **for loop** - Traditional loop with index control
- **forEach** - Higher-order function for iteration
- When to use each

### Parameter Destructuring
- Extracting object properties directly in function parameters
- Cleaner and more readable code

### Type Safety Features
- **noImplicitAny** - Compiler option to catch untyped variables
- Type guards for runtime type checking

## Running the File

### Prerequisites
```bash
npm install -g typescript
```

### Compile and Run
```bash
tsc intro.ts
node intro.js
```

### Or use ts-node
```bash
npx ts-node intro.ts
```

## Key Takeaways

1. **Use `const` by default** - It's immutable and safer
2. **Use `let` for reassignable variables** - Avoid `var` in modern code
3. **Always annotate types** - Improve code reliability and IDE support
4. **Use type aliases and interfaces** - For complex or reused types
5. **Take advantage of union types** - For flexible yet type-safe code
6. **Use enums for fixed sets of values** - Improves code readability
