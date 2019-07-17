import HomeController from '../controllers/HomeController';
import AdminController from '../controllers/AdminController';
import UserController from '../controllers/UserController';
import ProductController from '../controllers/ProductController';
import DevController from '../controllers/DevController';

let routes = app => {
    let homeController : HomeController = new HomeController();
    let adminController : AdminController = new AdminController();
    let userController : UserController = new UserController();
    let productController : ProductController = new ProductController();
    let devController : DevController = new DevController();

    app.get('/', homeController.getIndex);
    app.get('/admin/home', adminController.getIndex);

    app.post('/login', userController.postLogin);
    app.post('/admin/logout', userController.postLogout);
    app.post('/admin/create/u', userController.postCreate);
    app.post('/admin/create/p', productController.postCreate);

    app.get('/key', devController.getKey);
    app.post('/key', devController.postKey);
}

export default routes;
