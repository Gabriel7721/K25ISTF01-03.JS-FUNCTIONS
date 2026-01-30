function greet(name) {
  console.log("Hello, " + name);
}

const sayHello = greet;

greet.sayBye = function (name) {
  console.log("Bye, " + name);
};

console.log(greet); // fn hello
console.log(greet.sayBye); // fn bye

console.dir(greet);

typeof greet;
// 'function'
typeof greet.sayBye;
// 'function'
greet.hasOwnProperty("sayBye");
// true
