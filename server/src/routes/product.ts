import { CreateProductController, GetProductController, GetProductIdController } from "controllers/product";
import { Router } from "express";

export const product=Router()

product.post('/',CreateProductController)
product.get('/',GetProductController)
product.get('/:id',GetProductIdController)
