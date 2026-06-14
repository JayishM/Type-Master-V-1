const {MongoClient}=require("mongodb");
let express = require("express");
let app = express();

const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.post("/easySave", async(req, res) => {
    let txt=req.body.txt;
    try{
        let client = new MongoClient("mongodb://localhost:27017");
        await client.connect();
        let db=client.db("typemaster");
        let query=db.collection("easy");
        await query.insertOne({text: txt});
        await client.close();
        console.log("data saved");
       
        res.json({"Data":txt});

    }
    catch(err){
        console.log("error: "+err);
    }
    
});
app.get("/easy", async(req, res) => {
    try{
        let client = new MongoClient("mongodb://localhost:27017");
        await client.connect();
        let db=client.db("typemaster");
        let query=db.collection("easy");
        let txt=await query.find({}).toArray();
        await client.close();
        let random=Math.floor(Math.random()*txt.length);
        res.json({"Data":txt[random]});

    }
    catch(err){
        console.log("error: "+err);
    }
    
});
app.get("/medium", async(req, res) => {
    try{
        let client = new MongoClient("mongodb://localhost:27017");
        await client.connect();
        let db=client.db("typemaster");
        let query=db.collection("medium");
        let txt=await query.find({}).toArray();
        await client.close();
        let random=Math.floor(Math.random()*txt.length);
        res.json({"Data":txt[random]});

    }
    catch(err){
        console.log("error: "+err);
    }
    
});
app.get("/hard", async(req, res) => {
    try{
        let client = new MongoClient("mongodb://localhost:27017");
        await client.connect();
        let db=client.db("typemaster");
        let query=db.collection("hard");
        let txt=await query.find({}).toArray();
        await client.close();
        let random=Math.floor(Math.random()*txt.length);
        res.json({"Data":txt[random]});

    }
    catch(err){
        console.log("error: "+err);
    }
    
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});