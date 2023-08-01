const dotenv = require('dotenv').config({path:"./config.env"})
const express = require('express');
const app = express();
const router = require("./routes/router")
const port =process.env.PORT || 3001;

app.use(express.json())
app.use(router);

app.listen(port, () => {
    console.log("listening on port");
});