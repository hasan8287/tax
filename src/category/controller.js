const Boom = require('boom');

const Model = require('./model');

const modelCategory = new Model();

const controller = {};

/**
 * getData get all data category tax
 */
controller.getData = async (request, reply) => {
  try {
    const data = await modelCategory.getCategoryWithPagination();

    return reply.response({
      data: {
        docs: data,
        ...data.pagination,
      },
    }).code(200);
  } catch (error) {
    return Boom.badRequest(error.message);
  }
};


/**
 * createData create data category tax
 */
controller.createData = async (request, reply) => {
  try {
    const { payload } = request;
    const data = await modelCategory.insertNewCategory(payload);

    return reply.response({
      data,
    }).code(200);
  } catch (error) {
    return Boom.badRequest(error.message);
  }
};

module.exports = controller;
