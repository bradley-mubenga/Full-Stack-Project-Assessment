var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

let _CRUD = require('./crud');
app.use(_CRUD)

app.listen(process.env.PORT || 5000, function () {
  console.log('CORS-enabled web server listening on port 80')
})

