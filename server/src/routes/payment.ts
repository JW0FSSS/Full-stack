import { PaymentController } from "controllers/payments";
import { Router } from "express";


export const payment= Router()

payment.post('/',PaymentController)