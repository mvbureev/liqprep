import React, { PureComponent } from 'react';
import { observer, inject } from 'mobx-react';
import { any } from 'prop-types';
import { Modal, Button } from 'antd';

class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editModalVisible: false,
    };
    this.showEditModal = this.showEditModal.bind(this);
    this.handleEditOk = this.handleEditOk.bind(this);
  }

  showEditModal = () => {
    this.setState(() => ({
      editModalVisible: true,
    }));
  }

  handleEditOk = () => {
    this.setState(() => ({
      editModalVisible: false,
    }));
  }

  render() {
    const { editModalVisible } = this.state;
    const { testStore } = this.props;
    const { confirm } = Modal;

    const showConfirmDelete = (id) => {
      confirm({
        title: 'Do you want to delete this test?',
        onOk() {
          return testStore.deleteById(id);
        },
        onCancel() {},
      });
    };
    return (
      <div>
        List tests
        <br />
        <div className="panel panel-default">
          <div className="panel-body tradeComponent div-background table-responsive">
            <table className="table table-striped tb div-lightbackground">
              <thead className="thead-dark ">
                <tr>
                  <th>Text</th>
                  <th>Answers</th>
                  <th>TrueAnswer</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  testStore.tests.map((item) => (
                    <tr key={item._id}>
                      <td>{item.text}</td>
                      <td>
                        <ul>
                          {item.answers.map((itemAnswer) => (
                            <li>{itemAnswer}</li>
                          ))}
                        </ul>
                      </td>
                      <td>{item.trueAnswer}</td>
                      <td>
                        <Button
                          type="default"
                          shape="circle"
                          icon="edit"
                          onClick={this.showEditModal}
                        />
                        <Button
                          type="default"
                          shape="circle"
                          icon="delete"
                          onClick={() => showConfirmDelete(item._id)}
                        />
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  testStore: any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default inject('testStore')(observer(List));
