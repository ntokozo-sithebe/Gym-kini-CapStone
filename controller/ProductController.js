import express from 'express'
import bodyParser from 'body-parser'
import { products } from '../model/index.js'
import { cart } from '../model/index.js';


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
productRouter.post('/add', bodyParser.json(),(req,res)=>{
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
productRouter.patch('/product/:id', bodyParser.json(), (req,res)=>{
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
        res.json({
            msg:'Product has been deleted'
        })
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to remove product'

        })
    }
})

// CART CHANGES

// updating a cart - but only for a specific user which would be admin 

// update quantity on cart  only which needs to be done on the front end 

// productRouter.patch('/cart/:id',(req,res)=>{
//     try{
//         const cID = req.params.id
//         cart.fetchOrders(req,res)
//         req.json({msg:'Item has been updated'})
//     }catch(e){
//         res.json({
//             status: res.statusCode,
//             msg: 'Failed to Update products from Cart'
//         })
//     }
// })

// adding to cart

productRouter.post('/cart/:id',(req,res)=>{
    try{
        const cID = req.params.id
         cart.createOrder(req,res)
        res.json({msg:'Item has been added'})
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to add product from Cart'
        })
    }
})

// ability to delete from a cart

productRouter.delete('/cart/:id',(req,res)=>{
    try{
        const cID = req.params.id
         cart.deleteOrder(req,res)
        res.json({msg:'Item has been removed'})
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to delete product from Cart'
        })
    }
})

// products in cart

productRouter.get('/cart/:id',(req,res)=>{
    try{
        cart.fetchOrders(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve products from Cart'
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

