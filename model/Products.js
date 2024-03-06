import { connection as db } from "../config/config.js"


class Products{
    fetchProducts(req,res){
        const query = `SELECT prodID, prodName, prodQuantity, prodAmount, userID
        FROM Products;`

        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchProduct(req,res){
        const query = `
        SELECT prodID, prodName, ProdQuantity, prodAmount, userID
        FROM Products
        WHERE prodID = ${req.params.id}`

        db.query(query,(err,result)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result: result[0]
            })
        })
    }
    addProduct(req,res){
        const query = `
        INSERT INTO Products
        SET ?;`

        db.query(query,[req.body], (err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg: 'New Product was added'
            })
        })
    }
}

export{
    Products
}