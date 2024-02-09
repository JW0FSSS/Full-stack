import { CreateCategoryController, GetCategoryController, GetCategoryIdController } from "controllers/category";

import { Router } from "express";

export const category=Router()

category.post('',CreateCategoryController)
category.get('',GetCategoryController)
category.get('/:id',GetCategoryIdController)

