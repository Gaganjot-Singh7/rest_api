const express=require("express")
const DbConnection=require("./database/Connection.js")
const server=express()
const router=require("./router/index.js")
const dotenv=require("dotenv");
require("./database/productModel.js")


dotenv.config();
server.get("/",(req,res)=>{
    res.send("hi,from gagan please add /api/products to get api data")
})
const port=process.env.port || 8080
server.use("/api/products",router)
const start=async()=>{
try {
    server.listen(8080,()=>{
        console.log(`server connected http://localhost:${port}/api/products`);
    })
} catch (error) {
    console.log("server start",error);
}

}
start();
DbConnection();


