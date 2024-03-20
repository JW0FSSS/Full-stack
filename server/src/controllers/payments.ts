import { Request, Response } from "express";
import Stripe from "stripe";
import { Product } from "types/product";

export async function PaymentController(req:Request,res:Response) {

    const cart=req.body.cart as Product[]
    
    const stripe=new Stripe(process.env.STRIPE_KEY||'')

    const lineItems=cart.map(product=>({
        price_data:{
            currency:'usd',
            product_data:{
                name:product.name,
                images:[product.image||'']
            },
            unit_amount:product.price*100
        },
        quantity:product.quantity
    })) 


    const session=await stripe.checkout.sessions.create({
        line_items:lineItems,
        mode:'payment',
        success_url:'https://goodgamesv1.vercel.app/',
        cancel_url:'https://goodgamesv1.vercel.app/',
    })

    res.json(session.url)
}