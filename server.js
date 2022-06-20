const express=require('express')
const bodyParser = require('body-parser');
const app=express();
var path = require('path') //to get css file
app.use(express.static(path.join(__dirname, 'public'))); //to get css file
app.use(bodyParser.urlencoded({ extended: true })); 
const port =process.env.PORT||7000;
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
});



