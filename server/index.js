const { Nuxt, Builder } = require("nuxt");
const express = require("express");
const fs = require("fs");
const https = require("https");
const port = process.env.PORT || 443;
const isProd = process.env.NODE_ENV === "production";
const app = express();
const nuxtConfig = require("../nuxt.config.js");
const nuxt = new Nuxt(nuxtConfig);
let server = null;
let dev_options = null;
let production_options = null;

if (isProd) {
  server = app;
} else {
  dev_options = {
    key: fs.readFileSync("./server/10.0.0.8-key.pem"),
    cert: fs.readFileSync("./server/10.0.0.8.pem")
  };
  server = https.createServer(dev_options, app);
}
app.use(nuxt.render);

function listen() {
  server.listen(port, () => {
    console.log(`Port: ${port} start server`);
  });
}

if (!isProd) {
  new Builder(nuxt)
    .build()
    .then(listen)
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
} else {
  listen();
}
