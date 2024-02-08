import { CreateCategoryController } from "controllers/category";
import { Router } from "express";
import { GetCategory, GetCategoryId } from "services/categories";

export const category=Router()

category.post('',CreateCategoryController)
category.get('',GetCategory)
category.get('/:id',GetCategoryId)