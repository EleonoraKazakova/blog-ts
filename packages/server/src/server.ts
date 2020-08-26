import express from "express";
import cors from "cors"

const app = express();
app.use(cors());

const users: {[key: string]: string} = {}

app.use(express.json())

app.get('/',(req, res)=>{
	  res.json({"message":"Hello World!"});
});

app.post('/registration',(req, res)=>{
	users[req.body.username] = req.body.password
	res.json({username: req.body.username})
});

app.listen(3333);

