import mongoose from "mongoose";

const forgotPasswordSchema = new mongoose.Schema(
    {
        email: String,
        otp: String,
        expireAt: { type: Date, expires: 0 },
    },
    {
        timestamps: true,
    }
)

const forgotPassword = mongoose.model("forgot-password",forgotPasswordSchema,"forgot-password");

export default forgotPassword;