import { module, test, todo } from 'qunitjs';
import BundleRecognizer from '../lib/index';

module('Bundle Recognizer', {
  beforeEach() {
    this.recognizer = new BundleRecognizer({
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

test('recognizes a bundle', function(assert) {
  let matches = this.recognizer.recognize('/');
  let expectations = ['./static/index.js'];
  matches.forEach((match, i) => {
    assert.equal(match.handler(), expectations[i]);
  });
});
