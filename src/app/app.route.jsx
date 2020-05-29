import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../hoc/layout/layout';
import NotFound from '../components/404/404';

const ExampleContainer = React.lazy(() =>
  import('./routes/container/example.container'),
);

export default class AppRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.routes = [
      {
        path: '/',
        component: ExampleContainer,
        exact: true,
        index: 0,
      },
    ];
  }

  renderRoutes() {
    return this.routes.map((route) => {
      const RouteComponent = route.component;
      return (
        <Route
          key={route.index}
          path={route.path}
          render={(props) => <RouteComponent {...this.props} {...props} />}
          exact={route.exact}
        />
      );
    });
  }

  render() {
    return (
      <Layout {...this.props}>
        <Suspense fallback={<div> Loading.. </div>}>
          <Switch>
            {this.renderRoutes()}
            <Route
              render={(props) => <NotFound {...this.props} {...props} />}
            />
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}
