const mongoose =require("mongoose")


const conn=async()=>{
    try {
        await mongoose.connect(process.env.Mongo_connection);
        console.log("db connected");
    } catch (error) {
        console.log("Db error");
    }

}

module.exports=conn;