import { getRepository } from 'typeorm';
import User from '../entity/User';

let init = async () => {
    let userRepo = getRepository(User);
    let user = await userRepo.findOne({'admin': true});
    if(user == null){
        await userRepo.insert(new User(
            'admin',
            'admin123',
            true,
            0,
            []
        ));    
    }
}

export default init;
