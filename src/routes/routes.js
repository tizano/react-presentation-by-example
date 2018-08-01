import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Home from '../containers/HomeContainer';
import List from '../containers/ListContainer';
import Detail from '../containers/DetailContainer';
// import Contact from '../containers/ContactContainer';
import NoMatch from '../containers/NoMatchContainer';
// import Counter from '../components/Counter'
// import NoMatch from '../components/NoMatch'

const routes = (
  <div>
    {/* <NavBar /> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/articles" component={List} />
      <Route exact path="/articles/detail/:itemId" component={Detail} />
      {/* <Route exact path="/404" component={NoMatch} /> */}
      {/* <Route path="/contact" component={Contact} /> */}
      {/* <Route component={NoMatch} /> */}
      <Route exact path="/404" component={NoMatch} />
      <Redirect to="/404" />
    </Switch>
  </div>
);

export default routes;
