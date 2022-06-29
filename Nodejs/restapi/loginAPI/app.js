let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const dotenv = require('dotenv');
dotenv.config()
let port =process.env.PORT || 2200;
const mongoUrl = "mongodb+srv://login:LoginAPI@cluster0.flkev.mongodb.net/login?retryWrites=true&w=majority";
const bodyParser = require('body-parser');
const cors = require('cors');
const token = "8fbf8tyyt87378";

// middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res) => {
    res.send("welcome to Login Data")
})


// //Login
// app.post('/login',(req,res) => {
//     if(req.query.token === token){
//         db.collection('login').find().toArray((err,result) => {
//             if(err) throw err;
//             res.send(result)
//         })
//     }else{
//         res.send('Unauthorise')
//     }
// })

// //GetAllUsers
// app.get('/getallusers',(req,res) =>{
//     db.collection('getallusers').find().toArray((err,result) => {
//         if(err) throw err;
//         res.send(result)

//     })
// })

// //userinfo
// app.get('/userinfo',(req,res) =>{
//     db.collection('userinfo').find().toArray((err,result) => {
//         if(err) throw err;
//         res.send(result)

//     })
// })

// //Register
// app.post('/register',(req,res) => {
//     db.collection('register').insert(req.body,(err,result) => {
//         if(err) throw err;
//         res.send('register user succesfully')
//     })
   
// })

//Connection with database
MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log(`Failed to connect db`,err);
    db = client.db('login');
       app.listen(port,() => {
       console.log(`server is running on port ${port}`)
   })
})