import mongoose from "mongoose";
export const connect = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGOOSE_ULR);
        console.log("Đã kết nối đến database thành công !");
    } catch (error) {
        console.log("Kết nối đến database thất bại !");
    }
}

