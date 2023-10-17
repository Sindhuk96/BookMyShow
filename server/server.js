const express = require('express');
require('dotenv').config()
const app = express();

/*const port = 8080; // Change the port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/

app.listen(process.env.PORT, () => {
    console.log(`server is listening to port ${process.env.PORT}`);
});
