import { connection as db } from "../config/config.js";
import { hash, compare } from "bcrypt"; // for the password encryption
import { createToken } from "../middleware/AuthenticateUser.js";


class Users {
  fetchUsers(req, res) {
    const query = `SELECT userID, firstName, lastName,gender, emailAddress, userRole
        FROM Users;`;

    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  // fetching an individual user 
  // using re.params.id --- number at the end of (the end point -- specifies/ targets)

  fetchUser(req, res) {
    const query = `
        SELECT userID, firstName, lastName, gender, emailAddress, userPassword, userRole
        FROM Users
        WHERE userID = ?;
        `;

    db.query(query, [req.params.id], (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }

// adding a new user = payload = token 

  async createUser(req, res) {
	try{

    // this is for the payload - from user
    const data = req.body;
	// hashing the password
    data.userPassword = await hash(data?.userPassword, 10);
    const user = {
      emailAddress: data.emailAddress,
      userPassword: data.userPassword,
    }

    const query = `
    INSERT INTO Users
        SET ?;`;

    db.query(query, [data], (err) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: "Email address already exists, use another one",
        });
      } else {
        // creates the user token 
        let token = createToken(user);
        res.json({
          status: res.statusCode,
          token,
          msg: "You're registered",
        });
      }
    });
  }catch(error){
	// unexpected error response
	res.status(500).json({
		status: 500,
		msg: 'Internal error'
	})
  }
}

  async updateUser(req, res) {
    // const userID = req.params.id
    const data = req.body;
    if (data?.userPassword) {
      data.userPassword = await hash(data?.userPassword, 8);
    }
    const query = `
        UPDATE Users
        SET ?
        WHERE userID = ${req.params.id}`;

    db.query(query, [data], (err) => {
      if(err) throw err
      res.json({
          status: res.statusCode,
          msg: "The user information is updated",
        });
    });
  }

  deleteUser(req, res) {
    const userID = req.params.id;
    if (!userID) {
      return res.status(400).json({
        msg: "User identification is required",
      });
    } else {
      const query = `
          DELETE FROM Users
          WHERE userID = ?;`;

      db.query(query, [userID], (err) => {
        if (err){ 
        res.json({
          msg: 'Failed to delete the User'
        })}
        res.json({
          status: res.statusCode,
          msg: `User information has been removed`,
        });
      });
    }
  }

  userLogin(req, res) {
    const { emailAddress, userPassword } = req.body;
	if(!emailAddress || !userPassword)res.json({
		status: res.statusCode,
		msg: 'Error, Please enter your email and password'
	});

	else{

    const query = `
        SELECT  emailAddress, userPassword
        FROM Users
        WHERE emailAddress = '${emailAddress}';`

    db.query(query, [req.body], async(err, result) => {
      if (err) throw err
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "You provided a wrong email address",
        });
      } else {
        // to validate the password
        const properPass = await compare(userPassword, result[0].userPassword);
        if (validPassword) {
          const token = createToken({
            emailAddress,
            userPassword,
          });
          res.json({
            status: res.statusCode,
            msg: "You're logged in",
            token,
            result: result[0],
          });
        }else{

          res.json({
            status: res.statusCode,
            msg: "Please provide the correct password",
          });
        }
      }
    });
}
  }
  




}

export { 
  Users,

 };