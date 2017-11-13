import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { PageHeader, PageBody, PageContent, Table, RightShift, ModalForm } from '../../components';


class VarietyListPage extends Component {
    state = {
      visible: false,
      data: null,
      id: null,
    };

    editItem = (id) => {
      const { apples } = this.props;
      this.setState({
        visible: true,
        data: apples.filter(apple => apple.id === id)[0],
        id });
    };

    addItem = () => {
      this.setState({
        visible: true,
        data: null,
        id: null });
    };

    handleCancel = () => {
      this.setState({ visible: false });
      this.form.resetFields();
    };

    handleCreate = () => {
      const { editSelectedItem, createItem } = this.props;
      const form = this.form;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }

        if (this.state.id) {
          editSelectedItem(this.state.id, values);
        } else {
          createItem(values);
        }

        form.resetFields();
        this.setState({ visible: false });
      });
    };

    saveFormRef = (form) => {
        this.form = form;
    };

    render() {
      const { apples, deleteSelectedItem } = this.props;
      const { visible, data } = this.state;

      return (
        <PageContent>
          <PageHeader>Список сортов</PageHeader>
          <PageBody>
            <RightShift>
              <Button
                onClick={this.addItem}
              >
                Добавить новый сорт
              </Button>
            </RightShift>
            <ModalForm
              ref={this.saveFormRef}
              visible={visible}
              data={data}
              onCancel={this.handleCancel}
              onCreate={this.handleCreate}
            />
            <Table
              data={apples}
              editItem={this.editItem}
              deleteItem={deleteSelectedItem}
            />
          </PageBody>
        </PageContent>);
    }
}

VarietyListPage.propTypes = {
  apples: PropTypes.arrayOf(PropTypes.object),
  deleteSelectedItem: PropTypes.func.isRequired,
  editSelectedItem: PropTypes.func.isRequired,
  createItem: PropTypes.func.isRequired,
};

export default VarietyListPage;
