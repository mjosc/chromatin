class Server {
  constructor(data = []) {
    this.data = data;
    this.endpoints = {
      '/schemes': {
        get: data.schemes,
      }
    };
  }

  handle = (path, method) => {
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
  post = (path, body) => this.handle(path, 'post', body);
}

export default Server;
