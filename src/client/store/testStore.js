import { decorate, observable, action } from 'mobx';
import axios from 'axios';

export default class TestStore {
  tests = [];

  constructor() {
    this.fetchData();
    this.create();
    this.updateById();
    this.getById();
    this.deleteById();
  }

  fetchData() {
    axios.get('http://localhost:8080/api/test')
      .then((res) => {
        this.tests = [];
        res.data.map((item) => this.tests.push(item));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  create = (text, answers, trueAnswer) => {
    if (text && answers && trueAnswer) {
      axios.post('http://localhost:8080/api/test/', {
        text,
        answers,
        trueAnswer,
      })
        .then(() => this.fetchData())
        .catch((err) => {
          console.log(err);
        });
    }
  }

  updateById = (id, ...props) => {
    if (id) {
      axios.update(`http://localhost:8080/api/test/${id}`, { ...props })
        .then((res) => {
          this.tests = [];
          console.log(res);
        })
        .then(() => this.fetchData())
        .catch((err) => {
          console.log(err);
        });
    }
  }

  getById = (id) => {
    if (id) {
      axios.get(`http://localhost:8080/api/test/${id}`)
        .catch((err) => {
          console.log(err);
        });
    }
  }

  deleteById = (id) => {
    if (id) {
      axios.delete(`http://localhost:8080/api/test/${id}`)
        .then(() => this.fetchData())
        .catch((err) => {
          console.log(err);
        });
    }
  }
}

decorate(TestStore, {
  tests: observable,
  fetchData: action,
  create: action,
  updateById: action,
  getById: action,
  deleteById: action,
});
