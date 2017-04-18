'use strict';

var _qunitjs = require('qunitjs');

var _index = require('../lib/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunitjs.module)('Bundle Recognizer', {
  beforeEach() {
    this.recognizer = new _index2.default({
      routes: {
        application: {
          paths: [''],
          bundle: './static/application.js'
        },
        index: {
          paths: ['/'],
          bundle: './static/index.js'
        },
        posts: {
          paths: ['/posts/:id'],
          bundle: './static/posts.js'
        },
        'posts.edit': {
          paths: ['/posts/edit/:id'],
          bundle: './static/posts-edit.js'
        }
      }
    });
    this.recognizer.addRoutes();
  }
});

(0, _qunitjs.test)('recognizes a bundle', function (assert) {
  var matches = this.recognizer.recognize('/');
  var expectations = ['./static/index.js'];
  matches.forEach(function (match, i) {
    assert.equal(match.handler(), expectations[i]);
  });
});