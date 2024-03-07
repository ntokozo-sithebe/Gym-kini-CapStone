import { Products } from "./Products";
import { Users } from "./Users";

class Cart{
    fetchProduct(req,res){

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
    deleteProduct(req,res){
        const query = `
        DELETE FROM Users
        WHERE prodID = ${req.params.id};`

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