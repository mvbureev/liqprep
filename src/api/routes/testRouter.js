import { Router } from 'express';
import TestModel from '../models/TestModel';

const router = Router();

router.get('/', async (req, res) => {
  const test = await TestModel.find({});
  res.render('index', {
    title: 'Тест по математике',
    isIndex: true,
    test,
  });
});

router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Создать тест по математике',
    isCreate: true,
  });
});

// router.post('/create', async (req, res) => {
//   const test = new TestModel({

//   })
// });
