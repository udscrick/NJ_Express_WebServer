//First import core modules(Just convention)
const express = require('express')
const path = require('path')
//Then load the library modules
const app = express()


console.log("Directory name: ",__dirname) //Dirname gives us th path to the
//directory in which the file is
console.log("File name: ",__filename)//Filename gives us the complete path to 
//the directory in which the file is

//Using string manipulation to get the desired path
console.log(path.join(__dirname,'../public/index.html'))

let pathToPublic = path.join(__dirname,'../public')

//Serving the index.html
app.use(express.static(pathToPublic))


// app.get(
//     '',
//     (req,res)=>{
//         res.send('Hello express!')//Sending something back to the requestor
//     }
// )//Specifies what the server should do/return for a particular url

// app.get('/help',(req,res)=>{
//     //We can also send HTML
//     res.send("<h1>Hi! How can I help you?</h1>")
// })

// app.get('/about',(req,res)=>{
//     //We can also send data in stringified JSON format
//     res.send({name:'Uday',age:27})
// })

app.get('/aboutjson',(req,res)=>{
//We can also send data in JSON array
res.send([{name:'Uday',age:27},{name:'Uday',age:29}])
})


app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})//Starts up the server on a specfic port

//We dont need to specify ports in case of hosted websites as http and https
//both have default ports on which they listen