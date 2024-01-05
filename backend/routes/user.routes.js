const {Router} = require('express');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {UserModel} = require('../models/User.model')

const userController = Router();

userController.post('/register',  (req,res)=>{
    const {email,password,age} = req.body
    bcrypt.hash(password, 5, async function(err,hash){

        if(err){
            res.send("Something Went Worng, Please try agaign later")
        }
        const user = new UserModel({
            email,
            password:hash,
            age
        })

        await user.save()
        res.send("Regestraion Done")

    })


})

userController.post('/login', async(req,res)=>{

    const {email,password} = req.body;
    const user= await UserModel.findOne({email})
    const hash = user.password
    bcrypt.compare(password,hash, function(err,result){
        if(err){
            res.send("Something Went Worng, Please try agaign later")
        }
        if(result){

            const token = jwt.sign({userId : user._id}, "mahesh")
            res.send({message : "Login Done", token})


        }else{
            res.send("Invalid credentails")
        }

    })
})


module.exports={
    userController
}