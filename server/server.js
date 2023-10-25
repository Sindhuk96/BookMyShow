const express = require('express');
require('dotenv').config()
const app = express(); 
const userRouter=require('./routes/UserRouter');
const dbConfig = require("./config/dbConfig");

app.use(express.json());
app.use('/api/users',userRouter);

app.listen(process.env.PORT, () => {
    console.log(`server is listening to port ${process.env.PORT}`);
});
