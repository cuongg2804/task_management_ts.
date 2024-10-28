
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullName: String ,
    email: String,
    password:String,
    tokenUser: String,
    status: {
        type: String,
        default: "active"
      },
    createdAt: Date,
    
},{
    timestamps: true,
})

const User = mongoose.model("User", userSchema ,"users");

export default User;