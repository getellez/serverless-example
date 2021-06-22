'use strict';
const toUpperCase = require('./utils/uppercase')

const hello = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: toUpperCase('Hello Condor Labs!')
    }),
  }
  return callback(null, response);
};

module.exports = hello;