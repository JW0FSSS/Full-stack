import mongoose, { connect } from "mongoose";


export const db = mongoose.connection;

export async function ConnectDB() {
    await connect(process.env.MONGO_URl||'',{minPoolSize:5,maxPoolSize:15,socketTimeoutMS:3600000})
}
