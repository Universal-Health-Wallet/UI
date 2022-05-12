import React from 'react';
import PropTypes from 'prop-types';
import routes from './routes';
import { filterRoutes } from './helpers/utils';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import 'library/styles/index.scss';

const App = ({ platform }) => {
  return (
    <div>
      <Switch>
        {
          filterRoutes(routes, platform).map(route => (
            <Route key={route.path} {...route} />
          ))
        }
      </Switch>
    </div>
  );
};

App.propTypes = {
  platform: PropTypes.string.isRequired
};

export default connect(
  state => ({ platform: state.app.platform }),
  null,
  null
)(App);
