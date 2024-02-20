import { Types } from "mongoose";

 export interface Favorite {
    user_id:string,
    product_id:Types.ObjectId
}

