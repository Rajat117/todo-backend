const express = require('express');
const Knex = require('knex');
const logger = require('morgan');
const cors = require('cors');

const knexConfig = require('../../database/config');
const { Model } = require('objection');

module.exports = app => {
  const knex = Knex(knexConfig.development);
  Model.knex(knex);

  app.use(logger('dev'));
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};
