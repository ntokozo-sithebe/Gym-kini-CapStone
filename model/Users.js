import { connection as db } from "../config/config.js";
import { hash, compare } from "bcrypt"; // for the password encryption
import { createToken } from "../middleware/AuthenticateUser.js";
// import {query} from "express"

class Users {
  fetchUsers(req, res) {
    const query = `SELECT userID, firstName, lastName,gender, emailAddress, userPassword, userRole
        FROM Users;`;

    db.query(query, (err, results) => {
      if (err) throw err
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchUser(req, res) {
    const query = `
        SELECT userID, firstName, lastName, gender, emailAddress, userPassword, userRole
        WHERE userID = ${req.params.id};
        `;

    db.query(query, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  async createUser(req, res) {
    // this is for the payload - from user
    let data = req.body;
    data.userPassword = await hash(data?.userPassword, 10);
    let user = {
      emailAdd: data.emailAddress,
      userPassword: data.userPassword,
    };
    
     const query =
        `INSERT INTO Users
        SET ?;`

    db.query(query, [data], (err) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: "Email address already exists",
        });
      } else {
        let token = createToken(user);
        res.json({
          status: res.statusCode,
          token,
          msg: "You're registered",
        });
      }
    });
  }
  async updateUser(req, res) {
    const data = req.body;
    if (data?.userPassword) {
      data.userPassword = await hash(data?.userPassword, 8);
    }
    const query = `
        UPDATE Users
        SET ?
        WHERE userID = ${req.params.id}`;

    db.query(query, [data], (err) => {
      if (err)
        throw err.res.json({
          status: res.statusCode,
          msg: "The user information is updated",
        });
    });
  }
  deleteUser(req, res) {
    const userID = req.params.id;
    if(userID){
      return res.status(400).json({
        msg: 'User identification is required'
      })
    }
    const query = `
        DELETE FROM Users
        WHERE userID = ${req.params.id};`;

    db.query(query, (err) => {
      if (err) throw err
      res.json({
        status: res.statusCode,
        msg: `User information has been removed`,
      });
    });
  }
  userLogin(req, res) {
    const { emailAdd, userPassword } = req.body;
    const query = `
        SELECT userID, firstName, lastName, userAge, gender, emailAddress, userPassword, userRole
        FROM Users
        WHERE emailAddress = '${emailAddress}';`;

    db.query(query, async (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "You provided a wrong email address",
        });
      } else {
        // to validate the password
        const properPass = await compare(userPassword, result[0].userPassword);
        if (validPass) {
          const token = createToken({
            emailAdd,
            userPassword,
          });
          res.json({
            status: res.statusCode,
            msg: "You're logged in",
            token,
            result: result[0],
          });
          res.json({
            status: res.statusCode,
            msg: "Please provide the correct password",
          });
        }
      }
    });
  }
}

export { Users };
