import { connection as db } from "../config/config.js"

class Cart{
    fetchOrders(req,res){


        const query = `SELECT p.prodID, p.prodName, p.prodQuantity, p.prodAmount, u.userID
        FROM Cart
        INNER JOIN Products p
        USING (prodID) 
        INNER JOIN Users u
        USING (userID) ;`

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
        DELETE 
        FROM Cart 
        INNER JOIN users ON cart.userID = users.userID
        WHERE users.userID = ${req.params.id};`

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
        SELECT p.prodID, p.prodName, p.prodQuantity, p.prodAmount, u.userID
        FROM Cart
        INNER JOIN Products p
        USING (prodID) 
        INNER JOIN Users u
        USING (userID) ;
       `

        db.query(query, (err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg: `Item has been updated`
            })
        })
    }
}
export{
    Cart
}