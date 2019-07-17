import { Request, Response } from 'express';
import { Repository, getRepository } from 'typeorm';
import User from '../entity/User';

export default class UserController {

    userRepo : Repository<User>;

    postLogin = async (req: Request, res: Response) => {
        let user : User = await this.userRepo.findOne({
            'username': req.body.username,
            'password': req.body.password,
            'admin': req.query.type == 'admin'
        });

        if(user == null){
            res.redirect('/login')
        }else{
            req.session.admin = user.admin;
            res.redirect('/admin/home');
        }
    }

    constructor(){
        this.userRepo = getRepository(User);
    }

}
