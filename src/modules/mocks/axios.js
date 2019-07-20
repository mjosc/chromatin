import Server from './server';

const server = new Server();

const axios = {
  get: path => new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = server.get(path);
      if (result.success) {
        resolve(result);
      } else {
        reject(result);
      }
    }, 1500);
  })
};

export default axios;
