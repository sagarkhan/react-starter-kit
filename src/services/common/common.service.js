/* All Common services should be written here */
import { loader } from '../../store/common/actions/common.actions';

export default class CommonService {
  constructor() {
    this.store = window.store;
    this.error = new Error();
    if (this.store) {
      this.error = 'Store instance not initialized';
      throw this.error;
    }
  }

  loader(action) {
    const validActions = [true, false];
    if (!validActions.includes(action)) {
      this.error.message = `Invalid parameter passed in loader function, valid parameters are ${validActions}`;
      throw this.error;
    }
    this.store.dispatch(loader(action));
  }
}
