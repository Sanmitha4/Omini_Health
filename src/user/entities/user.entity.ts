
export interface IUser{
    id:number;
    name:string;
    phone:number;
    email:string;
    password:string;
    gender:string;

}

export class User implements IUser{
    id:number;
    name:string;
    phone:number;
    email:string;
    password:string;
    gender:string;

    constructor(user:IUser){
        this.id=user.id;
        this.name=user.name;
        this.phone=user.phone;
        this.email=user.email;
        this.password=user.password;
        this.gender=user.gender;

    }

}

export const UserDB:Array<User>=[
    new User({id:1,name:'Bob',phone:678,email:'bob@gmail.com',password:'password',gender:'Male'}),
    new User({id:2,name:'Rita',phone:123,email:'rita@gmail.com',password:'password',gender:'Female'}),
    new User({id:3,name:'Alex',phone:459,email:'alex@gmail.com',password:'password',gender:'Male'}),


];













