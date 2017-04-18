import RouteRecognizer from 'route-recognizer';

export default class BundleRecognizer extends RouteRecognizer {
  constructor(moduleMap) {
    super();
    this.moduleMap = moduleMap;
  }

  addRoutes() {
    Object.keys(this.moduleMap.routes).forEach((route) => {
      this.add(this.moduleMap.routes[route].paths.map((path) => {
        let bundle = this.moduleMap.routes[route].bundle;
        return { path: path, handler: () => {
          return bundle;
        } }
      }), { as: route })
    });
  }

  recognize() {
    let result = super.recognize(...arguments);

    return result.slice();
  }
}
