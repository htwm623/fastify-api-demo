const {getItems, getItem } = require('../controllers/items')


const Item = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    name: { type: 'string' },
  },
}

const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Item
      },
    }, 
  },
  handler: getItems
};

const getItemOpts = {
  schema: {
    response: {
      200: Item
    }, 
  },
  handler: getItem,
};


function itemRoutes(fastify, options, done) {
  fastify.get('/items', getItemsOpts);
  fastify.get('/items/:id', getItemOpts);
  done();
}

module.exports = itemRoutes;
