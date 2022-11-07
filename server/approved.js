import mongoose from 'mongoose'

const approvedSchema=mongoose.Schema({
    user:String,
    pswd:String
})