
class Server {
  constructor({ data = [] } = {}) {
    this.data = data;
    this.endpoints = {
      '/test': {
        get: () => data.schemas
      }
    };
  }

  handle = (path, method, params) => {
    const endpoint = this.endpoints[path];
    if (!endpoint) {
      return { success: false, reason: `bad path ${path}`};
    }
    const data = endpoint[method];
    if (!data) {
      return { success: false, reason: 'bad method get'};
    }
    return { success: true, data: data };
  }
  
  get = path => this.handle(path, 'get');
  post = path => this.handle(path, 'post', null);
}

export default Server;