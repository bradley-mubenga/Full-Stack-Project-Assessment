//Express Modules
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

//PORT
app.listen(port, () => console.log(`Listening on port ${port}`));

//
const crudRoutes = require('./crud');

//CRUD Routes Midlleware
app.use(crudRoutes)
