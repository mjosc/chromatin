import Server from './server';
import data from './data';

const server = new Server(data);

const handle = (path, method, body) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = server[method](path, body);
    if (result.success) {
      resolve(result);
    } else {
      reject(result);
    }
  }, 1500);
});

const axios = {
  get: path => handle(path, 'get'),
  post: (path, body) => handle(path, 'post', body),
};

export default axios;
