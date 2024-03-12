import express from 'express'
import bodyParser from 'body-parser'
import { products } from '../model/index.js'

const productRouter = express.Router();

//json middleware parsers requests
productRouter.use(bodyParser.json()) //

// fetching all products

productRouter.get('/', (req,res)=>{
    try{
        products.fetchProducts(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve products'
        })
    }
})

// getting product by the ID

productRouter.get('/:id', (req,res)=>{
    try{
        products.fetchProduct(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a product'
        })
    }
})
// adding
productRouter.post('/produce', bodyParser.json(),(req,res)=>{
    try{
        products.addProduct(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to add Product'
        })
    }
})

// updating the product 
productRouter.patch('/product/:id', bodyParser.json(),(req,res)=>{
    try{
        products.updateProduct(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to Update product'
        })
    }
})
// deleting the product 

productRouter.delete('/product/:id', bodyParser.json(), (req,res)=>{
    try{
        products.deleteProduct(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to remove product'

        })
    }
})

export{
    productRouter
}






// cart 
// post method - prodID - prodQuantity
// delete from cart as well 
// 

