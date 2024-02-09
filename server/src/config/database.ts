import { connect } from "mongoose";

/* export function ConnectDB() {
        try {
            connect('mongodb+srv://JW0FSS:Lobomalo1234$jw0fss@api.txuob3d.mongodb.net/E-commerce')
            .then(()=> console.log('Database connected'))
        } catch (error) {

        }
    } */

export async function ConnectDB() {
    await connect('')
}
