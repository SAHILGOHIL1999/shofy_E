import mongoose from "mongoose";

const connectDB = async () => {
    try {
        let res = await mongoose.connect(process.env.MONGODB_URI)
        console.log("👍 _Connected to MongoDB");
    } catch (error) {
        console.error(" 🚨 _Error connecting to MongoDB:", error);
        process.exit(1);
    }
}
export default connectDB