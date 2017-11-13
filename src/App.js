import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { URLS } from './core/constants';
import { IndexPage, NotFoundPage, VarietyListPage } from './pages';
import { MainLayout } from './components';
import store from './core/store';
import 'antd/dist/antd.css';

const App = () => (
  <Provider store={store}>
    <HashRouter><MainLayout>
      <Switch>
        <Route
          path={URLS.INDEX}
          component={IndexPage}
          exact
        />
        <Route
          path={URLS.VARIETYLIST}
          component={VarietyListPage}
          exact
        />
        <Route
          path="*"
          component={NotFoundPage}
        />
      </Switch>
    </MainLayout></HashRouter>

  </Provider>
);

export default App;

