import { AddFavoriteController, FavoriteIdController,DeleteFavoriteController } from "controllers/favorite";
import { Router } from "express";
import { VerifyJwt } from "middlewares/jsonwebtoken";

export const favorite=Router()

favorite.post('/',VerifyJwt,AddFavoriteController)
favorite.delete('/',VerifyJwt,DeleteFavoriteController)
favorite.get('/',VerifyJwt,FavoriteIdController)
