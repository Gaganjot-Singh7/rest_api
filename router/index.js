const express=require("express");

const router=express.Router()
const getAllProducts=require("../controllers/index.js")



router.route('/').get(getAllProducts);



module.exports= router;