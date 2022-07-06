import { router } from '../index';
import { SIGN_IN } from './constants';

function protectedRoute(id: number):void {
  if (!id) {
    router.go(SIGN_IN);
  }
}

export default protectedRoute;
