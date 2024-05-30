const mongoose = require("mongoose");

const products = require("../products.json")



const productSchema = mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    product_price: {
        type: String,
        required: true
    },
    product_featured: {
        type: Boolean,
        default: false
    },
    product_rating: {
        type: String,
        default: 4.9
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    product_company: {
        type: String,
        required: true
    },
    product_description: {
        type: String,
        required: true
    }
})

const product = mongoose.model("product", productSchema)
console.log("model created check name is product");





module.exports = product ;





