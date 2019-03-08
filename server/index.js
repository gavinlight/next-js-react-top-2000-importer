const next = require('next');
const express = require('express');
const url = require('url');
const { port, env } = require('./../config');
const router = require('./router');

const app = next({
  dev: env !== 'production',
  dir: './src',
});

const handle = router.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server
    .use((req, res) => {
      const parsedUrl = url.parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(port, (err) => {
      if (err) throw err;

      console.info(`[${env}] Server running on http://localhost:${port}`);
    });
});
