'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _routeRecognizer = require('route-recognizer');

var _routeRecognizer2 = _interopRequireDefault(_routeRecognizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BundleRecognizer = function (_RouteRecognizer) {
  _inherits(BundleRecognizer, _RouteRecognizer);

  function BundleRecognizer(moduleMap) {
    _classCallCheck(this, BundleRecognizer);

    var _this = _possibleConstructorReturn(this, (BundleRecognizer.__proto__ || Object.getPrototypeOf(BundleRecognizer)).call(this));

    _this.moduleMap = moduleMap;
    return _this;
  }

  _createClass(BundleRecognizer, [{
    key: 'addRoutes',
    value: function addRoutes() {
      var _this2 = this;

      Object.keys(this.moduleMap.routes).forEach(function (route) {
        _this2.add(_this2.moduleMap.routes[route].paths.map(function (path) {
          var bundle = _this2.moduleMap.routes[route].bundle;
          return { path: path, handler: function handler() {
              return bundle;
            } };
        }), { as: route });
      });
    }
  }, {
    key: 'recognize',
    value: function recognize() {
      var result = _get(BundleRecognizer.prototype.__proto__ || Object.getPrototypeOf(BundleRecognizer.prototype), 'recognize', this).apply(this, arguments);
      return result.slice();
    }
  }]);

  return BundleRecognizer;
}(_routeRecognizer2.default);

exports.default = BundleRecognizer;