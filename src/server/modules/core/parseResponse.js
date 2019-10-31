const express = require('express');

const parseResponse = function parseResponse(app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};

module.exports = parseResponse;
