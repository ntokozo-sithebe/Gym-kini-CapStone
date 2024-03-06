import {userRouter, express} from "./controller/UserController.js";
import { productRouter } from "./controller/ProductController.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
import { errorHandling } from "./middleware/ErrorHandling.js";
import path from "path";
import { config } from "dotenv";
config()


const app = express()
const port = +process.env.port || 5000

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers","*");
    res.header("Access-Control-Expose-headers", "Authorization");
    next();
})

app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended:true,
    }),
    cookieParser(),
    cors()

)

app.get('^/$|/gym\'kini', (req,res)=>{
    res.status(200).sendFile(path.join(_dirname, './static/index.html'))
})

app.use('/users',userRouter)
app.use('/products', productRouter)
app.use(errorHandling)
app.listen(port, ()=>{
    console.log(`Gym'kini server is running on port ${port}`);
})