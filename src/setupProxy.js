const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://localhost:7238', 
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
