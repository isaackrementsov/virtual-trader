import HomeController from '../controllers/HomeController';
import AdminController from '../controllers/AdminController';

let routes = app => {
    let homeController : HomeController = new HomeController();
    let adminController : AdminController = new AdminController();

    app.get('/', homeController.getIndex);
    app.get('/admin/home', adminController.getIndex)
}

export default routes;
