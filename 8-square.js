// Get the size argument from command line
const sizeArg = process.argv[2];

// Convert the size argument to an integer
const size = parseInt(sizeArg, 10);

// Check if size is a valid positive integer
if (!size || size < 1) {
  console.log('Missing size');
} else {
  // Loop to print the square
  for (let i = 0; i < size; i++) {
    // Print one line of X's with length = size
    console.log('X'.repeat(size));
  }
}
