import { connect } from "mongoose";
import { UserModel } from "schemas/User";

export async function ConnectDB() {
    await connect(process.env.MONGO_URl||'',{minPoolSize:2})
    await UserModel.find({})
}
