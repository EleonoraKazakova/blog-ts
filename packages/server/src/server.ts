import express from "express";//express is a library for web-server
import cors from "cors"//cors is a library to make requests from other address

const app = express();
app.use(cors());

const users: {[key: string]: string} = {}

app.use(express.json())

app.get('/',(req, res)=>{
	  res.json({"message":"Hello World!"});
});

app.post('/registration',(req, res)=>{
	users[req.body.username] = req.body.password
	res.json({username: req.body.username})//send a response, example in file 'Form'(in props.setUser(user))
});

app.post('/login', (req, res)=>{
	if(users[req.body.username] === req.body.password){
		res.json({username: req.body.username})
	} else {
		res.status(401).send('Incorrect username or password')
	}
})

app.listen(3333);

