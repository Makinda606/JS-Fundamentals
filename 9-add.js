// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Get arguments from command line
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Convert arguments to integers
const num1 = parseInt(arg1, 10);
const num2 = parseInt(arg2, 10);

// Calculate the sum using the add function
const sum = add(num1, num2);

// Print the result
console.log(sum);
