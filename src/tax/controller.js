const Boom = require('boom');

const Model = require('./model');

const modelTax = new Model();

const controller = {};

/**
 * deleteData : remove data category tax by id
 */
controller.deleteData = async (request, reply) => {
  try {
    const { params } = request;

    const { id } = params;
    const action = await Model.deleteData(id);
    if (!action) {
      return Boom.badGateway('failed delete data');
    }

    return reply.response({
      data: {
        tax_id: id,
      },
    }).code(200);
  } catch (error) {
    return Boom.badRequest(error.message);
  }
};

/**
 * getData get all data tax
 */
controller.getData = async (request, reply) => {
  try {
    const { query } = request;
    const { page = 1, limit = 10 } = query;

    const data = await modelTax.getCategoryWithPagination({
      page,
      limit,
    });
    return reply.response({
      data,
      ...data.pagination,
    }).code(200);
  } catch (error) {
    return Boom.badRequest(error.message);
  }
};


/**
 * createData : create data tax
 */
controller.createData = async (request, reply) => {
  try {
    const { payload } = request;
    const data = await modelTax.insertNewTax(payload);

    return reply.response({
      data,
    }).code(201);
  } catch (error) {
    return Boom.badRequest(error.message);
  }
};

module.exports = controller;
