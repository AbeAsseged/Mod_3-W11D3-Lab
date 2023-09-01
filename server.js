const express = require('express');
const app = express();


// Function to check if a number is a Fibonacci number
function isFibonacci(number) {
    let a = 0;
    let b = 1;
  
    while (b < number) {
      const temp = b;
      b = a + b;
      a = temp;
    }
  
    return b === number;
  }

// Route for checking if a number is a Fibonacci number
app.get('/fibonacci/:number', (req, res) => {
  const number = parseInt(req.params.number);

  if (isFibonacci(number)) {
    res.send('Very good. It is Fibonacci.');
  } else {
    res.send('I can tell this is not a Fibonacci number.');
  }
});


// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});