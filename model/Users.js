import {connection as db} from "../config/config.js"
import { hashSync, compare } from "bcrypt"
import { createToken } from "../middleware/AuthenticateUser"
import {query} from "express"


class Users{
    fetchUsers(req,res){
        const query = `SELECT userID, firstName, lastName,gender, emailAdd, UserPassword, userRole
        FROM Users;`



        db.query(query,(err, results)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchUser(req,res){
        const query = `
        SELECT userID, firstName, lastName,gender, emailAdd, UserPassword, userRole
        WHERE userID = ${req.params.id};
        `
    
        db.query(query, (err, result)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                result
            })
        })
    }
    async createUser(req,res){
        let data = req.body
        data.userPassword = await hash(data?.userPassword,10)
        let user = {
            emailAdd: data.emailAdd,
            userPassword: data.userPassword
        }
        const query = `
        INSERT INTO Users
        SET ?;`

        db.query(query, [data], (err)=>{
            if(err){
                res.json({
                    status: res.statusCode,
                    msg: 'Email address already exists'
                })
            }else{
                let token = createToken(user)
                res.json({
                    status: res.statusCode,
                    token,
                    msg:'You\'re registered'
                })
            }
        })


        
    }
    async updateUser(req,res){
        const data = req.body
        if(data?.userPassword){
            data.userPassword = await hash(data?.userPassword, 8)
        }
        const query = `
        UPDATE Users
        SET ?
        WHERE userID = ${req.params.id}`

        db.query(query,[data], (err)=>{
            if(err) throw err.
            res.json({
                status:res.statusCode,
                msg: 'The user information is updated'

            })
        })
    }
    deleteUser(req,res){
        const query = `
        DELETE FROM Users
        WHERE userID = ${req.params.id};`

        db.query(query, (err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg: `User information has been removed`
            })
        })
    }
    login(req,res){
        const {emailAdd, userPassword} = req.body;
        const query = `
        SELECT userID, firstName, lastName, userAge, gender, emailAdd, userPassword, userRole
        FROM Users
        WHERE emailAdd = '${emailAdd}';`

        db.query(query, async(err,result)=>{
            if(err) throw err 
            if (!result?.length){
                res.json({
                    status:res.statusCode,
                    msg: 'You provided a wrong email address'
                })
            }else{
                const properPass = await compare (userPassword,result[0].userPassword);
                if(validPass){
                    const token = createToken({
                        emailAdd,
                        userPassword
                    })
                    res.json({
                        status:res.statusCode,
                        msg:'You\'re logged in',
                        token,
                        result: result[0],
                    });
                    res.json({
                        status:res.statusCode,
                        msg: 'Please provide the correct password'
                    })
                }
            }
        });
    }

    
}

export {
    Users
}