import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';

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

    constructor(u : string, p : string, a : boolean){
        this.username = u;
        this.password = p;
        this.admin = a;
    }

}
