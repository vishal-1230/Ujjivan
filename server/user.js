import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    user:String,
    pswd:String,
    approved:{
        type: Boolean,
        default: false
    },
    paymentMade:{
        type:Boolean,
        default:false
    }
})

export default mongoose.model('user', userSchema)