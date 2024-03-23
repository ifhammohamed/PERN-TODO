// File: index.js
const app = require("./src/app");
require("dotenv").config();

// Define a port to listen on
const port = process.env.PORT;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
