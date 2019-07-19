import db from './db';

class OKResponse {
  constructor() {
    this.status = 200,
    this.data = {
      success: true, 
    };
  }
}

class ErrBadRequest {
  constructor(method, reason) {
    this.status = 400;
    this.data = {
      success: false,
      method: method,
      reason: reason,
    };
  }
}

const axios = {
  get: path => {
    const endpoint = db[path];
    if (endpoint === undefined) {
      return Promise.reject(new ErrBadRequest('get', `bad path ${path}`));
    }
    const data = endpoint['get'];
    if (data === undefined) {
      return Promise.reject(new ErrBadRequest('get', 'invalid method get'));
    }
    return Promise.resolve(new OKResponse());
  },
};

export default axios;
