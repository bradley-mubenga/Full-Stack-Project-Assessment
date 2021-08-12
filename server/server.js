//Express Modules
const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

//
const crudRoutes = require('./crud');

//
app.use(express.json());

app.use(cors());

//CRUD Routes Midlleware
app.use(crudRoutes)

//PORT
app.listen(port, () => console.log(`Listening on port ${port}`));
