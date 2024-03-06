import { Users } from "./Users";
import { Products } from "./Products";
import { verifyAToken } from "../middleware/AuthenticateUser";



let users = new Users()
let products = new Products()

export{
    users,
    products
}