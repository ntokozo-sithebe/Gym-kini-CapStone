import { connection as db } from "../config/config.js"

class Cart{
    fetchOrders(req,res){

        // const {prodID, prodName, prodQuantity, prodAmount, userID } = req.body;

        const query = `SELECT prodID, prodName prodQuantity, prodAmount, userID
        FROM Products , Users;`

        db.query(query,(err,result)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    deleteOrder(req,res){
        const query = `
        DELETE FROM Products
        WHERE prodID = ${req.params.id};`

        db.query(query, (err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg: `Items has been removed`
            })
        })
    }
    updateOrder(req,res){
        const query = `
        SELECT prodID, prodName prodQuantity, prodAmount, userID
        FROM Products , Users;
       `

        db.query(query, (err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg: `Items has been removed`
            })
        })
    }
}
export{
    Cart
}