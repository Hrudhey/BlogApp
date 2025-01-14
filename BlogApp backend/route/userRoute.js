const express= require('express');
const routes= express.Router();
routes.use(express.json());
routes.use(express.urlencoded({extended:true}));
const userModel= require('../model/userData'); 
const jwt= require('jsonwebtoken');


routes.post('/login',async(req,res)=>{
    
    const user= await userModel.findOne({Email:req.body.Email})   // first Email is the content in DB
        if(!user){
            res.status(404).send({message:'User not found'});
        }
        try{
          if(user.Password==req.body.Password){
            const payload={Email:user.Email,Password:user.Password};
            const token= jwt.sign(payload,'blogApp');                // token creation and the key
            res.status(200).send({message:'Login Successful',key:token}) // instead of key any variable can be given
          }
          else{
            res.status(400).send({message:'Invalid credentials'})
          }
        }catch (error){
            console.log(error);
        }
    
})


module.exports=routes;

