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
router.get('/:id', testGetById);
router.patch('/:id', testUpdateById);
router.delete('/:id', testDeleteById);

module.exports = router;
