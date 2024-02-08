export interface UserRegister extends UserLogin{
    username:string,
    address?:{
        street:string,
        city:string,
        state:string
    },
    image?:string,
    phoneNumber?:number,
}

 export interface UserLogin{
    email:string,
    password:string,
}