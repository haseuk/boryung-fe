require("dotenv").config();
const express = require('express');
const path = require('path');
const server = express();
const { createBundleRenderer } = require('vue-server-renderer');
const template = require('fs').readFileSync('./server/template.html', 'utf-8');
const serverBundle = require('../dist/vue-ssr-server-bundle.json');
const clientManifest = require('../dist/vue-ssr-client-manifest.json');
const { inject } = require('./meta');
const sitemap = require('./sitemap');
const { createProxyMiddleware } = require('http-proxy-middleware');

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
});

const resolve = file => path.resolve(__dirname, file);
const serve = (urlPath, cache) => express.static(resolve(urlPath), { maxAge: cache ? 60 * 60 * 24 * 30 : 0 });
const getLanguageFromHeader = req => (/^(?:ko|ja|zh|en)/.exec(req.header('Accept-Language')) || ['en'])[0];

server.use('/css', serve('../dist/css', true));
server.use('/images', serve('../dist/images', true));
server.use('/fonts', serve('../dist/fonts', true));
server.use('/js', serve('../dist/js', true));
server.use('/favicon.ico', serve('../dist/favicon.ico', true));
server.use('/robots.txt', serve('../dist/robots.txt', false));
server.use('/api', createProxyMiddleware({ target: "http://localhost:8079", changeOrigin: true }));

server.get('/sitemap.xml', sitemap);

server.get('*', (req, res) => {
  const context = { url: req.url }
  if (req.url === '/') {
    res.redirect('/'+getLanguageFromHeader(req)+'/');
    return;
  }

  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).sendFile(resolve('404.html'));
      } else {
        res.status(500).sendFile(resolve('500.html'));
      }
    } else {
      res.header('Content-Type', 'text/html');
      res.end(inject(html, context, /^\/(ko|ja|zh|en)/.exec(req.url)[1]));
    }
  });
});

server.post('*', (req, res) => {
  res.status(500).sendFile(resolve('500.html'));
});

server.listen(3000, () => {
  console.log('server started at port 3000');
});
