import { decorate, observable, action } from 'mobx';
import axios from 'axios';

export default class TestStore {
  title = {};

  constructor() {
    this.fetchData();
  }

  fetchData() {
    axios.get('http://localhost:8080/api/test')
      .then((response) => {
        console.log(response);
      })
      .then((response) => {
        this.title = response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

decorate(TestStore, {
  title: observable,
  fetchData: action,
});
