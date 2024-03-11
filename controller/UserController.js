import express from 'express'
import bodyParser from 'body-parser'
import {users} from '../model/index.js'
import { verifyAToken } from '../middleware/AuthenticateUser.js'
import { cart } from '../model/index.js'


const userRouter = express.Router()
const cartRouter = express.Router()



// fetching all users
userRouter.get('/',(req,res)=>{
    try{
        users.fetchUsers(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve users'
        })
    }
})

// fetching user by Id

userRouter.get('/:id',(req,res)=>{
    try{
        users.fetchUser(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a user'
        })
    }
})
// adding a user
userRouter.post('/register',verifyAToken, bodyParser.json(),(req,res)=>{
    try{
        users.createUser(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to create user'
            
        })

    }
})
// updating a user
userRouter.patch('/update/:id', bodyParser.json(),(req,res)=>{
    try{
        users.updateUser(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to update user'
            
        })
 
    }
})

// deleting the product

userRouter.delete('/delete/:id', bodyParser.json(),(req,res)=>{
    try{
        users.deleteUser(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Unable to delete user'
        })
    }
})

// login for user
userRouter.post('/login',verifyAToken, bodyParser.json(), (req,res)=>{
    try{
        users.login(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg: 'Failed to log in'
        })
    }
})

// need to create a path for how a user can delete, add, update a cart --- so delete cart controller

// End-points for my Cart

userRouter.get('/:cID/cart',(req,res)=>{
    try{
        cart.fetchOrders(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve products from Cart'
        })
    }
})

userRouter.delete('/delete/:cID/cart',(req,res)=>{
    try{
         cart.deleteOrder(req,res)
        // const userID = req.params.id
        res.json({msg:'Item has been removed'})
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to delete product from Cart'
        })
    }
})

userRouter.patch('/update/:cID/cart',(req,res)=>{
    try{
        cart.fetchOrders(req,res)
        req.json({msg:'Item has been updated'})
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to Update products from Cart'
        })
    }
})



export {
    userRouter,
    express,
    cartRouter
}