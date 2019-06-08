var express = require('express');
var app = express();
var port = 2000;
 var mongoose = require('mongoose');
  var bodyParser = require('body-parser');
var cors = require('cors');
 //var router = express.Router();
 var User = require('./model');

app.use(cors());



mongoose.connect("mongodb://user:user123@dbh84.mlab.com:27847/practiceapp/newdatabase", () => {
    console.log("Mongoose in connected")
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const todo = []

// GET METHOD
app.get('/home', (req, res) => {
    console.log(todo)
    res.send(todo)
})

// POST METHOD
app.post('/home/todo',function(req,res) {
    // console.log('req', req.body)
    // var a = req.body.name
    // todo.push(req.body.name)
    // console.log(todo)
    // res.send(todo)
    // a.save().then(() => console.log('saved'))

    var myData = new User(req.body);
    console.log('my data', myData)
   
   myData.save()
    .then(item => {
        console.log('data', item)
    res.status(200).json({"todo" :"item saved to database"});
    })
    .catch(err => {
        console.log('err', err)
    res.status(400).send("unable to save to database");
    });
});

// DELET METHOD
app.delete('/home/:id', (req, res) => {
    console.log(req.params.id)
    console.log(todo)
    todo.splice(req.params.id,1)
    console.log(todo)
    res.send(todo)
})



// PUT METHOD
 app.put('/home/:id', (req, res) => {
    console.log(req.params.id)
    todo.splice(req.params.id,1, req.body.name)
    console.log(todo)
    res.send(todo)
})






// app.post('/api2', function(req, res) {
//     User.create(req.body, function(err, book) {
//       if(err) {
//         res.send('error saving book');
//       } else {
//         console.log(book);
//         res.send(book);
//       }
//     });
//   });

// app.post('/api', (req, res) => {
 
// var awesome_insctance = new User({ name: 'awesome',email:"abc" });   
 
// awesome_insctance.save()
//    .then(item => res.send(item)) 
//    .catch(err => res.send(err))
// });

app.post("/books", (req, res) => {
   
    var myData = new User(req.body);
    console.log('my data', myData)
   
   myData.save()
    .then(item => {
        console.log('data', item)
    res.send("item saved to database");
    })
    .catch(err => {
        console.log('err', err)
    res.status(400).send("unable to save to database");
    });
});
// app.post('/books', function(req, res){
//     console.log('req', req.body)
//     var myData = new User(req.body);
//     myData.save().then((data)=>{
//         console.log('data', data)
//     })
    // papiro.save(req.body,function(err, data){
    //     console.log('hello')
    //   if(err){
    //     console.log("Error inserting to Database.");
    //   }else {
    //     console.log("Data to Send to DataBase:");
    //     console.log(data);
    //     console.log("");
  
    //     res.send(data);
    //     console.log("Data Has Been Posted to Doatabase");
    //     // console.log("");
    //   }
    // });
  //});


app.listen(port, console.log('server is running at '+ port))