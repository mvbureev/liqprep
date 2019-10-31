const express = require('express');
const testGetAll = require('../api/TestApi/testGetAll');
const testGetById = require('../api/TestApi/testGetById');
const testUpdateById = require('../api/TestApi/testUpdateById');
const testCreate = require('../api/TestApi/testCreate');
const testDeleteById = require('../api/TestApi/testDeleteById');

const router = express.Router();

router.get('/', testGetAll);
router.post('/', testCreate);
router.get('/:testId', testGetById);
router.patch('/:testId', testUpdateById);
router.delete('/:testId', testDeleteById);

module.exports = router;
