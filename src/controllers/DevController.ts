import { Request, Response } from 'express';

export default class DevController {

    getKey = (req: Request, res: Response) => {
        res.render('key');
    }

    postKey = (req: Request, res: Response) => {
        if(req.body.key == 'nzE&2Qxzy9s?HQ:3'){
            req.session.key = true;
            res.redirect('/');
        }else{
            res.redirect('/key');
        }
    }

}
