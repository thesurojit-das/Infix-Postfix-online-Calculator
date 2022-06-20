const express=require('express')
const bodyParser = require('body-parser');
const app=express();
const port=7000;
var path = require('path') //to get css file
app.use(express.static(path.join(__dirname, 'public'))); //to get css file
app.use(bodyParser.urlencoded({ extended: true })); 

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
});



