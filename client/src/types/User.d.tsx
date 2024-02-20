export interface User extends UserLogin{
    username:string,
    address?:{
        street:string,
        city:string,
        state:string
    },
    image?:string,
    phoneNumber?:string,
    token:string
}

 export interface UserLogin{
    email:string,
    password:string,
}