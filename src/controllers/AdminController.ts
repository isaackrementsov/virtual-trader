import { Request, Response } from 'express';
import { Repository, getRepository } from 'typeorm';
import User from '../entity/User';
import Product from '../entity/Product';

export default class AdminController {

    userRepo : Repository<User>;
    productRepo : Repository<Product>;

    getIndex = async (req: Request, res: Response) => {
        let users = await this.userRepo.find({'admin': false});
        let products = await this.productRepo.find();
        console.log(products)
        res.render('admin', {users: users, products: products});
    }

    constructor(){
        this.userRepo = getRepository(User);
        this.productRepo = getRepository(Product);
    }

}
