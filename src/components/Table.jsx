import React from 'react';
import { Table as AntdTable, Button, Popconfirm } from 'antd';
import PropTypes from 'prop-types';

const Table = ({ data, editItem, deleteItem }) => {
  const columns = [{
    title: '#',
    dataIndex: 'id',
      key: 'id',
    sortOrder: 'ascend',
  }, {
    title: 'Название',
    dataIndex: 'name',
  }, {
    title: 'Сорт',
    dataIndex: 'variety',
  }, {
    title: 'Описание',
    dataIndex: 'description',
  }, {
    title: 'Действия',
    render: (text, record) => (
      <span>
        <Button
          icon="edit"
          onClick={() => editItem(record.id)}
        />
        <Popconfirm
          placement="top"
          title="Вы действительно хотите удалить запись?"
          onConfirm={() => deleteItem(record.id)}
          okText="Да"
          cancelText="Нет"
        >
          <Button
            type="danger"
            icon="delete"
          />
        </Popconfirm>
      </span>
    ),
  }];

  return (
    <AntdTable
      rowKey="uid"
      dataSource={data}
      columns={columns}
      locale={{
        emptyText: 'Нет данных',
      }}
    />);
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

Table.defaultProps = {
  data: null,
};

export default Table;
