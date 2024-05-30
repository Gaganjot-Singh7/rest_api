const product = require("../database/productModel.js")

const getAllProducts = async (req, res) => {
    try {
        const { product_name, product_company, sort, select,limit } = req.query

        const search = {}
        if (product_name) {

            search.product_name = { $regex: product_name, $options: "i" }

        }
        if (product_company) {


            search.product_company = { $regex: product_company, $options: "i" }
        }
         limitValue=parseInt(limit)
        
        d = product.find(search).limit(limitValue)
        console.log("search ", search);
        if (sort) {
            let sortData = sort.replace(",", " ")
            console.log("sorting", sortData);
            d = await d.sort(sortData)
           
        }
        if (select) {
            const selectData = select.replace(",", " ")
            console.log("selecting", selectData);
            d = await d.select(selectData)
          
        }


        const data = await d
        res.json(data)
    } catch (error) {
        console.log("error in fetching", error);
    }
}

module.exports = getAllProducts