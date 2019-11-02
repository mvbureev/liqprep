const express = require('express');
const {
  testGetAll,
  testCreate,
  testGetById,
  testUpdateById,
  testDeleteById,
} = require('../api/testApi');

const router = express.Router();

router.get('/', testGetAll);
router.post('/', testCreate);
router.get('/:testId', testGetById);
router.patch('/:testId', testUpdateById);
router.delete('/:testId', testDeleteById);

module.exports = router;
