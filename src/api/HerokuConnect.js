const express = require('express')
const app = express()
const PORT = 9000
const bodyParser = require('body-parser')
const { Client } = require('pg')
const connectionString = 'postgres://sithis@localhost:5432/PeopleSearch'


const client = new Client({
    connectionString: connectionString
  })

const errorHandling = (error) => {
	if(error) return error.stack
}

client.connect()
    .then(()=>{
        console.log('connected')
    })
    .catch((error)=>{
        console.log(error.stack , 'Error on Connect')
    })

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use((request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    response.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST"
    );
    next();
  });

app.get('/User', (request,response) =>{
    client.query('SELECT * FROM Users', (error,results)=> {
            response.send(results.rows)
        })
    })



app.listen(PORT, () =>{
    console.log('listening on port ' + PORT)
})