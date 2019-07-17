import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import Share from './Share';

@Entity()
export default class Product {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @OneToMany(type => Share, share => share.product)
    shares : Share[];

    constructor(n : string){
        this.name = n;
    }

}
