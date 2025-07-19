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

export async function webhook(req:Request,res:Response) {

    const sig = req.headers['stripe-signature'] as string;
  const endpointSecret = process.env.STRIPE_KEY_WEBHOOK as string; 
 const stripe=new Stripe(process.env.STRIPE_KEY||'')
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.log(`⚠️  Webhook signature verification failed: ${err}`);
    return res.sendStatus(400);
  }

  // Procesa el evento
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    console.log(`💰 PaymentIntent for ${paymentIntent.amount} was successful!`);
  }

  if (event.type === 'payment_intent.payment_failed') {
    const paymentIntent = event.data.object;
    console.log(`💰 PaymentIntent for ${paymentIntent.amount} was failed!`);
  }

  res.json({ received: true });
}