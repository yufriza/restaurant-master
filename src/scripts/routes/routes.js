import TheList from '../views/pages/the-list';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': TheList, // default page
  '/the-list': TheList,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
