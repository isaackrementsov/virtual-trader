import { Request, Response } from 'express';
import { Repository, getRepository } from 'typeorm';
import Product from '../entity/Product';

export default class ProductController {

    productRepo : Repository<Product>;

    postCreate = async (req: Request, res: Response) => {
        await this.productRepo.insert(new Product(req.body.name));
        res.redirect('/admin/home');
    }

    constructor(){
        this.productRepo = getRepository(Product);
    }

}
