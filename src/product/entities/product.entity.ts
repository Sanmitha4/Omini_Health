


export interface IProduct{
    id:number;
    name:string;
    description:string;
    price:number;
    isDiscounted?:boolean;
}
export class Product implements IProduct{
    id:number;
    name:string;
    description:string;
    price:number;
    isDiscounted:boolean;

    constructor (product:IProduct){
        this.id=product.id;
        this.name=product.name;
        this.description=product.description;
        this.price=product.price;
        this.isDiscounted=product.isDiscounted;
    }


}

export const ProductDB:Array<Product>=[
    new Product({id:1,name:'Product 1',description:'Description 1',price:100,isDiscounted:false}),
    new Product({id:2,name:'Product 2',description:'Description 2',price:200,isDiscounted:false}),
    new Product({id:3,name:'Product 3',description:'Description 3',price:300,isDiscounted:false}),
];


