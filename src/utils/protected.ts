import { router } from '../index';
import { Urls } from './constants';

function protectedRoute(id: number):void {
  if (!id) {
    router.go(Urls.SIGN.IN);
  }
}

export default protectedRoute;
