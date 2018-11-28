const routes = module.exports = require('next-routes')()

// .add(name, url, file)
routes
  .add('index')
  .add('channel', '/:slug.:id', 'channel')
  .add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast')
