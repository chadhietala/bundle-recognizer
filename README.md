# Bundle Recognizer

A sub-class of route-recognizer specifically made for associating a URL to a bundle.

# Usage

```
const spdy = require('spdy');
const BundleRecognizer = require('bundle-recognizer');

const bundleRecognizer = new BundleRecognizer({
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

bundleRecognizer.addRoutes();

spdy.createServer(options, (req, res) => {
  let matches = bundleRecognizer.recognize(req.url);

  let scripts = matches.map((matche) => {
    let bundle = match.handler();
    let stream = res.push(bundle, {
      status: 200,
      method: 'GET',
      request: {
        accept: '*/*'
      },
      response: {
        'content-type': 'application/javascript'
      }
    });
    stream.on('error', function() {});
    return `<script src="${bundle}"></script>`
  });

  res.end(scripts);

}).listen(3000);

```
