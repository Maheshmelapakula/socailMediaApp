const express = require('express');


const {userController} = require('./routes/user.routes')
const {connection} = require('./config/db')
const app = express();
app.use(express.json());

app.use("/user", userController)

app.get('/', (req,res)=>{
    res.send("Home page")
})





const port = 8080;

app.listen(port, async()=>{

   try {

    await connection
    console.log("Connected to DB");
    
   } catch (error) {

    console.log(error);
    console.log("Error in connecting to DB");
    
   }
    

    console.log(`Server is running on http://localhost:${port}`);
})