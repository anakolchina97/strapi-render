'use strict';

/**
 * carsa service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::carsa.carsa');
