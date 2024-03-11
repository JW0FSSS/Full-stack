import { connect } from "mongoose";
import { UserModel } from "schemas/User";

export async function ConnectDB() {
    await connect(process.env.MONGO_URl||'',{minPoolSize:5,maxPoolSize:15})
    await UserModel.find({})
}
