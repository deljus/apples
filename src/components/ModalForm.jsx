import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Select } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const varietyApple = ['Зима', 'Лето', 'Весна', 'Осень'];

const ModalForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form, data } = props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title={data ? 'Редактировать запись' : 'Создать запись'}
        okText="ОК"
        cancelText="Отмена"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="Название яблока">
            {getFieldDecorator('name', {
              initialValue: data ? data.name : '',
              rules: [{ required: true, message: 'Введите название яблока' }],
            })(
              <Input />,
            )}
          </FormItem>
          <FormItem label="Сорт яблока">
            {getFieldDecorator('variety',
              { initialValue: data ? data.variety : '' },
            )(
              <Select >
                { varietyApple.map((variety, i) => <Option key={i + variety} value={variety}>{variety}</Option>) }
              </Select>,
            )}
          </FormItem>
          <FormItem label="Описание">
            {getFieldDecorator('description',
              { initialValue: data ? data.description : '' })(<Input type="textarea" />)}
          </FormItem>
        </Form>
      </Modal>
    );
  },
);

ModalForm.propTypes = {
  data: PropTypes.object,
};

ModalForm.defaultProps = {
  data: null,
};


export default ModalForm;
