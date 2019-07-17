import { createConnection } from 'typeorm';

import app from './app';
import routes from './server/routes';
import init from './util/dbBootstrap';

import Middleware from './util/Middleware';

createConnection().then(async connection => {
    if(app.get('env') == 'development'){
        await connection.synchronize();
    }

    let middleware : Middleware = new Middleware();
    app.use(middleware.auth);

    await init();

    app.listen(app.get('port'), () => {
        console.log('App is running on localhost:%d in %s mode', app.get('port'), app.get('env'));
        console.log('Press CTRL + C to stop');
    });

    routes(app);
}).catch(e => console.log('Database Error: ', e));
