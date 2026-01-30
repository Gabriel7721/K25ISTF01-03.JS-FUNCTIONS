walk();

function walk() {
  console.log("let's walk!");
} // hoisting function

run(); // Cannot access 'run' before initialization

const run = function () {
  console.log("lets run...");
}; // non-hoisting function

run(); // Can access 'run' after initialization
