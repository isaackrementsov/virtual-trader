import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import Product from './Product';
import User from './User';

@Entity()
export default class Share {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    type : string;
    @Column()
    price : number;

    @ManyToOne(type => User)
    user : User;
    @ManyToOne(type => Product)
    product : Product;

    constructor(t : string, pr : number, u : User, p : Product){
        this.type = t;
        this.price = pr;
        this.user = u;
        this.product = p;
    }

}
