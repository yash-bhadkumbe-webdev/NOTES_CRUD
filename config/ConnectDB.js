import mongoose from "mongoose";

const ConnectDB = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/CRUD")
        console.log("DB connected successfully")
    }catch (e){
        console.log("connection failed")
    }
}

export default ConnectDB;