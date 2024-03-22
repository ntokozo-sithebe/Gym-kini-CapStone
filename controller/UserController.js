
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
           res.json({
            msg: 'User has been Logged in'
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
userRouter.post('/add', bodyParser.json(),(req,res)=>{
    try{
        users.createUser(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to add a new user'
            
        })

    }
})
// updating a user
userRouter.patch('/user/:id', bodyParser.json(),(req,res)=>{
    try{
        users.updateUser(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to update user'
            
        })
 
    }
})

// deleting the user

userRouter.delete('/user/:id', bodyParser.json(),(req,res)=>{
    try{
        users.deleteUser(req,res)
        res.json({
            msg: 'User has been deleted'
        })
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Unable to delete user'
        })
    }
})

// login for user
userRouter.post('/login', bodyParser.json(), (req,res)=>{
    try{
        users.userLogin(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg: 'Failed to log in'
        })
    }
})

// need to create a path for how a user can delete, add, update a cart --- so delete cart controller

// End-points for my Cart

// userRouter.get('/:cID/cart',verifyAToken,(req,res)=>{
//     try{
//         cart.fetchOrders(req,res)
//     }catch(e){
//         res.json({
//             status: res.statusCode,
//             msg: 'Failed to retrieve products from Cart'
//         })
//     }
// })

// userRouter.delete('/:id/cart',(req,res)=>{
//     try{
//         const cID = req.params.id
//          cart.deleteOrder(req,res)
//         res.json({msg:'Item has been removed'})
//     }catch(e){
//         res.json({
//             status: res.statusCode,
//             msg: 'Failed to delete product from Cart'
//         })
//     }
// })

// userRouter.patch('/update/:cID/cart',(req,res)=>{
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



export {
    userRouter,
    express,
    cartRouter
}
