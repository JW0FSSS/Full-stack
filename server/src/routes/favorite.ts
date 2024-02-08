import { AddFavoriteController, FavoriteIdController } from "controllers/favorite";
import { Router } from "express";

export const favorite=Router()

favorite.post('/',AddFavoriteController)
favorite.post('/:user_id',FavoriteIdController)
