import { connect } from "mongoose";

export async function ConnectDB() {
    await connect(process.env.MONGO_URl||'')
}
