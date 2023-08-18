const express = require("express");

const Pizza = require('./models/pizzaModel')

const db = require("./db")

const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Server working");
})

app.get("/getpizzas", (req,res)=>{
   Pizza.find({}).then((err, docs)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render(docs)
        }
   })
})

const port=process.env.PORT || 3000;

app.listen(port, ()=> 'Server running on port');