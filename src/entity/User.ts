import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import Share from './Share';

@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username : string;
    @Column()
    password : string;
    @Column()
    admin : boolean;
    @Column()
    balance : number;

    @OneToMany(type => Share, share => share.user)
    shares : Share[];

    constructor(u : string, p : string, a : boolean, b : number, s : Share[]){
        this.username = u;
        this.password = p;
        this.admin = a;
        this.balance = b;
        this.shares = s;
    }

}
