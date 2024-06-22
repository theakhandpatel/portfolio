# MonkeyLang Interpreter 🐵

![GitHub last commit](https://img.shields.io/github/last-commit/theakhandpatel/monkeylang-go)

**Repository:** <Badge type="info">  [GitHub <img src="/images/github.svg" alt="GitHub" style="height: 20px; width: 20px; vertical-align: middle; padding-bottom: 3px; display: inline" />](https://github.com/theakhandpatel/monkeylang-go) </Badge>


**Stack:** <Badge type="tip" text="Golang" /> <Badge type="tip" text="Pratt Parser" />

## Description
🐵  The MonkeyLang Interpreter is a Go implementation of the Monkey programming language, following the book [Writing An Interpreter In Go](https://interpreterbook.com/). Monkey is a simple and fun language designed for educational purposes.


## ✨ Interpreter Features

- Lexer and Parser for Monkey language
- 🌳 Abstract Syntax Tree (AST) representation
- Interpreter for evaluating Monkey code
- 🔄 Interactive REPL (Read-Eval-Print Loop)


## 🐒 Monkey-Lang Features

🚀 Monkey supports various features:

- **Variable bindings**: Use the `let` keyword to bind values to names, like `let x = 5;`.
- **Integers and booleans**: Numbers and boolean literals are supported, e.g., `10` or `true`.
- **Arithmetic expressions**: Perform arithmetic operations using operators like `+`, `-`, `*`, `/`, e.g., `2 + 3 * 4`.
- **Built-in functions**: Use predefined functions like `len("hello")` and `puts("Hello, world!")`.
- **First-class and higher-order functions**: Functions can be used as values, and you can define functions using the `fn` keyword, like `let add = fn(x, y) { x + y; };`.
- **Closures**: Create functions that capture their environment, e.g., `let newAdder = fn(x) { fn(y) { x + y }; };`.
- **String data structure**: Create strings with double quotes and concatenate them with `+`.
- **Array data structure**: Use square brackets for array literals, e.g., `[1, 2, 3]`.
- **Hash data structure**: Create hash literals with curly braces, and access values with the index operator.

In Monkey, the syntax is designed to be simple and easy to read. Here are some examples of Monkey's language features:

### Variable Bindings

  ```
  let age = 1;
  let name = "Monkey";
  let result = 10 * (20 / 2);
  ```

### Integers and Booleans

  ```
  let isMonkeyAwesome = true;
  let numBananas = 42;
  ```

### Arithmetic Expressions

  ```
  let total = 2 + 3 * 4;
  let divisionResult = 10 / 2;
  ```

### Built-in Functions

  ```
  let length = len("Hello, Monkey!"); // length = 13
  puts("Hello, world!"); // Prints "Hello, world!"
  ```

### Functions

You can create functions using the `fn` keyword:

  ```
  let add = fn(x, y) { return x + y; };
  ```

  Implicit return values are also possible:

  ```
  let subtract = fn(a, b) { a - b; };
  ```

  Calling a function is straightforward:

  ```
  add(1, 2); // Returns 3
  ```

### Complex Functions

Here's a more complex function, a Fibonacci calculator:

  ```
  let fibonacci = fn(x) {
    if (x == 0) {
      0
    } else if (x == 1) {
      1
    } else {
      fibonacci(x - 1) + fibonacci(x - 2);
    }
  };
  ```

### Arrays

You can work with arrays like this:

  ```
  let myArray = [1, 2, 3, 4, 5];
  myArray[0]; // Accessing elements in an array, returns 1
  ```

### Hashes

Hashes store values associated with keys:

  ```
  let person = {"name": "Alice", "age": 25};
  person["name"]; // Accessing values in a hash, returns "Alice"
  ```

### Higher-Order Functions

Monkey supports higher-order functions that take other functions as arguments:

  ```
  let twice = fn(f, x) {
    return f(f(x));
  };

  let addTwo = fn(x) {
    return x + 2;
  };

  twice(addTwo, 2); // Returns 6
  ```

In Monkey, functions are first-class citizens, just like integers or strings, and you can use them as such.


## 📄 License

This project is licensed under the MIT License

## 🙏 Acknowledgments

- [Thorsten Ball](https://thorstenball.com/) for the book "Writing an Interpreter in Go."

Happy coding! 🚀🐵