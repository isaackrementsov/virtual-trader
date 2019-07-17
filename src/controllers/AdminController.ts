import { Request, Response } from 'express';
import { Repository, getRepository } from 'typeorm';
import User from '../entity/User';

export default class AdminController {

    userRepo : Repository<User>;

    getIndex = (req: Request, res: Response) => {
        res.render('admin');
    }

    constructor(){
        this.userRepo = getRepository(User);
    }

}
