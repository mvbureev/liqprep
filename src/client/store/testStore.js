import { observable, action } from 'mobx';
import axios from 'axios';

export class UserStore {
  @observable public title = {};

  constructor() {
    this.fetchData();
  }

 @action
  private fetchData() {
    axios.get('http://localhost:8080/')
      .then(response => {
        console.log(response.data, '@@@');
      })
      .then(response => {
        this.title = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
