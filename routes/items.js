const { getItems, getItem, addItem,deleteItem,updateItem } = require('../controllers/items');

const Item = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
};

const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Item,
      },
    },
  },
  handler: getItems,
};

const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
};

const postItemOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
      },
    },
    response: {
      201: Item,
    },
  },
  handler: addItem,
}
const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: {
            type: 'string'
          }
        }
      }
    }
  },
  handler: deleteItem
}

const updateItemsOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: updateItem,
}

function itemRoutes(fastify, options, done) {
  // get all items
  fastify.get('/items', getItemsOpts);

  // get single item
  fastify.get('/items/:id', getItemOpts);

  // add item
  fastify.post('/items', postItemOpts);

  // delete item
  fastify.delete('/items/:id', deleteItemOpts);

  // update item
  fastify.put('/items/:id', updateItemsOpts)
  done();
}

module.exports = itemRoutes;
