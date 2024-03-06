import { Users } from "./Users.js";
import { Products } from "./Products.js";
import { verifyAToken } from "../middleware/AuthenticateUser.js";



let users = new Users()
let products = new Products()

export{
    users,
    products
}