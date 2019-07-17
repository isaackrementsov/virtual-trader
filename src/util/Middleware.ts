import { Response, Request, NextFunction } from "express";

export default class Middleware {

    auth = (req: Request, res: Response, next: NextFunction) => {
        let adminRestricted = req.url.indexOf('/admin') != -1;
        let userRestricted = req.url.indexOf('/user') != -1;

        if((adminRestricted && !req.session.admin)){
            res.redirect('/');
        }else if(!adminRestricted && req.session.admin){
            res.redirect('/admin/home');
        }else{
            next();
        }
    }

}
