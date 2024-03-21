import express, { NextFunction,Request,Response } from "express";
import cors from "cors";
import { ErrorHand } from "./types/ErrorHand";
import { ConnectDB } from "./config/database";
import { user } from "./routes/user";
import { favorite } from "./routes/favorite";
import { product } from "./routes/product";
import { category } from "./routes/category";
import { payment } from "routes/payment";
import schedule from "node-schedule"
import './config/enviroments'

const app=express()

app.use(cors({origin:process.env.ORIGIN}))
app.use(express.json())

app.use(user)
app.use('/payment',payment)
app.use('/favorite',favorite)
app.use('/product',product)
app.use('/category',category)

app.use((req:Request,res:Response,next:NextFunction)=>{
    const error:ErrorHand=new Error('Not Found')
    error.status=404
    next(error)
})
app.use((err:ErrorHand,req:Request,res:Response,next:NextFunction)=>{
    res.send({err:err.message}).status(err.status || 500)
})

schedule.scheduleJob('*/6 * * * *', function(){
    fetch('http://localhost:3000/category',{
        method:'get',
        headers:{
            'Content-type':'application/json'
        }
    })
    .then(data=>data.json())
    .then(res=>res.length>0?console.log(':)'):console.log(':('))
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
    });
  });


ConnectDB()
.then(()=>{
    app.listen(process.env.PORT||3000,()=>console.log(`server on ... http://localhost:${process.env.PORT||3000}`))
})
.catch(e=>console.log(e))
