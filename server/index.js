import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import approved from './approved.js'
import user from './user.js'
import { initializeApp } from "firebase/app";
import twilio from 'twilio'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5500/'
}))
dotenv.config()

const accountSid = 'AC6a9789adbf0fe218e0551cedf493ed46';
const authToken = 'fa1f39bebf1fdba4546ea0c9422cd428';
const client = twilio(accountSid, authToken)

mongoose.connect('mongodb+srv://vishal:Cluster2004@cluster0.btbmdim.mongodb.net/JSFB?retryWrites=true&w=majority', (err) => console.log('connected'))
const db = mongoose.connection

const port = process.env.PORT || 8080

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* eslint-disable no-unused-vars */
const firebaseConfig = {
    apiKey: "AIzaSyAs73UdpQCw7lUggZEgFGl9OJuQNLLl7t8",
    authDomain: "jsfb-server.firebaseapp.com",
    projectId: "jsfb-server",
    storageBucket: "jsfb-server.appspot.com",
    messagingSenderId: "998720366228",
    appId: "1:998720366228:web:b19a5437d2d1068bcdb681"
};
/* eslint-enable no-unused-vars */
// Initialize Firebase
const app2 = initializeApp(firebaseConfig);

// app.post('/signup', (req, res)=>{
//     user.create({user: req.body.user, name: req.body.name, phone: req.body.phone, email: req.body.email, approved: false, paymentMade:false})
// })

app.get('/signup', (req, res) => {
    console.log('Creating User');
    user.create({ name: req.query.name, user: req.query.user, pswd: req.query.pswd, phone: req.query.phone, email: req.query.email, approved: false, paymentMade: false })
    const otp = Math.floor(Math.random() * 10000)
    client.messages.create({ body: `Your OTP for Jana SFB Verification is ${otp}`, from: '+16205510762', to: '+918373958829' })
    console.log('Sending OTP')
    res.json(otp)
})

console.log()

app.get('/isApproved', (req, res)=>{
    const user=req.query.user
    const pswd=req.query.pswd
    approved.find({user:user}, (err, data)=>{
        if (err) throw err;
        if (data.length==0){
            res.json('0')
        }else{
            if (data[0].pswd==pswd){
                res.json('1')
            }else{
                res.json('2')
            }
        }
    })
})

app.post('/login', (req, res)=>{
    res.redirect('http://localhost:3000')
})

app.get('/getPaymentStatus', (req, res) => {

})



app.listen(port)




// twilio sid AC6a9789adbf0fe218e0551cedf493ed46
// auth token fa1f39bebf1fdba4546ea0c9422cd428
// num  +16205510762