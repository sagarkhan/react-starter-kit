import Axios from 'axios';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

class HttpService {
  get(url, config = {}) {
    return from(Axios.get(url, config))
      .pipe(map((response) => response.data))
      .toPromise();
  }

  post(url, data, config = {}) {
    return from(Axios.post(url, data, config))
      .pipe(map((response) => response.data))
      .toPromise();
  }

  put(url, data, config = {}) {
    return from(Axios.put(url, data, config))
      .pipe(map((response) => response.data))
      .toPromise();
  }

  delete(url, data, config = {}) {
    return from(Axios.delete(url, data, config))
      .pipe(map((response) => response.data))
      .toPromise();
  }
}

const HttpClient = new HttpService();

export default HttpClient;
