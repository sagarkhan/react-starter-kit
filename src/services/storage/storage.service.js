import { STORAGE_ENGINES } from '../../utils/constants';

export default class StorageService {
  constructor(engine) {
    this.engine = engine;
    this.store = window.store;
    this.engines = STORAGE_ENGINES;
    this.errors = new Error();

    if (!this.store) {
      this.error = 'Store instance not initialized';
      throw this.error;
    }

    switch (this.engine) {
      case this.engines.SESSION:
        this.storage = window.sessionStorage;
        break;
      case this.engines.REDUX:
        this.storage = this.store;
        const prototypes = ['get', 'remove', 'set', 'clear', 'clearAll'];
        prototypes.forEach((key) => delete StorageService.prototype[key]);
        break;
      default:
        this.errors.message = `Invalid engine passed in StorageService, valid engines are ${JSON.stringify(
          this.engines,
        )}`;
        throw this.errors;
    }
  }

  getAll() {
    switch (this.engine) {
      case this.engines.SESSION:
        const temp = {};
        Object.keys(this.storage || {}).forEach((key) => {
          temp[key] = this.storage[key];
        });
        return temp;
      case this.engines.REDUX:
        return this.storage.getState();
      default:
        return {};
    }
  }

  set(key, value) {
    if (key && value) {
      this.storage.setItem(key, value);
      return this.get(key);
    }
    this.error.status = 400;
    this.error.message = `Invalid parameters has been passed to set session Key = ${key}, Value = ${value})`;
    throw this.error;
  }

  get(key) {
    if (key) {
      return this.storage.getItem(key);
    }
    this.error.status = 400;
    this.error.message = `Invalid parameters has been passed to get session Key = ${key}`;
    throw this.error;
  }

  remove(key) {
    this.storage.removeItem(key);
  }

  clearAll() {
    this.storage.clear();
  }
}
