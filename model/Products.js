import { connection as db } from "../config/config.js"

class Products{
    fetchProducts(req,res){
        const query = `SELECT prodID, prodName, prodQuantity, prodAmount, prodUrl
        FROM Products;`

        db.query(query,(err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchProduct(req,res){
        const query = `
        SELECT prodID, prodName, prodQuantity, prodAmount, prodUrl
        FROM Products
        WHERE prodID = ?`;

        db.query(query, [re.params.id],(err,result)=>{
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
    deleteProduct(req,res){
        const query = `
        DELETE FROM Products 
        WHERE prodID = ?;
        `

        db.query(query,[prodID], (err)=>{
            if(err){
                res.json({
                    msg: 'Failed to delete product'
                })
            }
            res.json({
                status:res.statusCode,
                msg: 'Product was deleted'
            })
        })
    }
    updateProduct(req,res){
        const query = `
        UPDATE PRODUCTS 
        SET ?
        WHERE prodID = $(req.params.id)
        `

        db.query(query, [req.body], (err) =>{
            if(err){
                res.json({
                    msg: 'Failed to update product'
                })
            }
            res.json({
                status: res.statusCode,
                msg: 'Product has been updated'
            })
        });

    }
}

export{
    Products
}