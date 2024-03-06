import express from 'express'
import bodyParser from 'body-parser'
import { Products } from '../model/Products.js'

const productRouter = express.Router()

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
productRouter.post('/addProduct', bodyParser.json(),(req,res)=>{
    try{
        products.Update(req,res)
    }catch(e){
        res.json({
            status: req.statusCode,
            msg: 'Failed to update user'
        })
    }
})
productRouter.patch('/UpdateProduct', bodyParser.json(),(req,res)=>{
    try{
        products.Update(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to Update product'
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

