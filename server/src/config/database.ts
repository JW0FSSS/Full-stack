import mongoose, { connect } from "mongoose";
import { Sequelize } from "sequelize";

export const db = mongoose.connection;

/* export async function ConnectDB() {
    await connect(process.env.MONGO_URl||'',{minPoolSize:5,maxPoolSize:15,socketTimeoutMS:3600000})
}
 */

export const sequelize=new Sequelize("mysql://root@localhost:3306/goodgames")

export async function ConnectDB() {
    await sequelize.authenticate()
}