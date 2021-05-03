const bodyParser = require("body-parser")
require('./models/index')
const port = process.env.PORT || 5001

const db = require('./config/database');
console.log("proccess env", process.env.PORT)
console.log(process.env.DB_USERNAME)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_DATABASE)
console.log(process.env.NODE_ENV)

db
.authenticate()
.then(() => {
    console.log("Connection has been established successfully.")
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err)
  })



var http = require('http');
//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response
  res.end(); //end the response
}).listen(port, function(){
 console.log("server start at port 5000"); //the server object listens on port 3000
});

