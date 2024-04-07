import express from 'express';
import cors from 'cors'
import { mongoose } from 'mongoose';
import UserModel from './models/User.js';
import dotenv from 'dotenv'
dotenv.config();



const app = express()
app.use(express.json())
app.use(cors())

const PORT = 5000;




app.get('/health', (req, res) => {
    res.json({status: 'All Good!'})
})


app.post('/register',(req,res)=>{
    UserModel.create(req.body)
    .then(users =>res.json(users))
    .catch( err => res.json(err))

})

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    UserModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password===password){
                res.json('Success')
            }else{
                res.json('The password is incorrect')
            }
        }else{
            res.json('No user Existed')
        }
    })
})









//database connection
const connectDb=async ()=>{
    await mongoose.connect("mongodb+srv://suchitathorat:St9096377929@suchiiii.d3yvuie.mongodb.net")
    console.log("Database Connected")
}
connectDb();



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})