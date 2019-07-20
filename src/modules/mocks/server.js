
class Server {
  constructor({ data = [] } = {}) {
    this.data = data;
    this.endpoints = {
      '/test': {
        get: () => data.schemas
      }
    };
  }
  
  get = path => {
    const endpoint = this.endpoints[path];
    if (!endpoint) {
      return { success: false, reason: `bad path ${path}` };
    }
    const data = endpoint['get'];
    if (!data) {
      return { success: false, reason: 'bad method get'};
    }
    return { success: true, data };
  }
}

export default Server;
