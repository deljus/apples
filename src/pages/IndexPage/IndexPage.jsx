import React from 'react';
import { Button } from 'antd';
import { PageHeader, PageBody, PageContent, RightShift, List, ListItem } from '../../components';
import { URLS } from '../../core/constants';

const IndexPage = ({ history }) => (
  <PageContent>
    <PageHeader>Главная</PageHeader>
    <PageBody>
      <p>Приложение позволяет добавлять, редактировать и удалять сорта яблок.</p>
      <p>Приложение состоит из 2 страниц:</p>
      <List>
        <ListItem>
              Главная страница.
        </ListItem>
        <ListItem>
              Список сортов.
        </ListItem>
      </List>
      <p>Для того чтобы начать пользоваться приложением нажмите кнопку "Продолжить".</p>
      <RightShift>
        <Button
          type="primary"
          onClick={() => history.push(URLS.VARIETYLIST)}
        >
            Продолжить
        </Button>
      </RightShift>
    </PageBody>
  </PageContent>
);

export default IndexPage;
