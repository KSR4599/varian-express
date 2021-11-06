//Meant for server-side routing by express.js
const express = require('express');
const axios = require('axios');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const users = [];
var cors = require('cors')
var decycle = require('json-decycle').decycle

app.use(cors());
app.use(bodyParser.json());


//Varian
app.get('/api/getBlogFeed', (req, res ) => {

var lang = req.query.lang;

if(lang == undefined){
  lang = "en"
}

axios
.get(`https://www.varian.com/rest-api/varian-blog-data?_format=json&limit=50&localize=${lang}`)
.then((res) => {

 res.send(res.data.blogs);
})
.catch((error) => {
  console.error("Error : "+ error);
});
});



app.get('/', (req,res) => {
  res.send('You have hit the Varian Back-End API')
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
