import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

app.use('/post', postRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to Memories App Api's")
});

// const CONNECTION_URL = "mongodb+srv://akif:16421@cluster0.6dv6g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true,useUnifiedTopology: true})
.then(()=> app.listen(PORT, ()=> console.log(`server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);