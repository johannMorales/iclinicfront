import React from "react";
import routes from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BaseLayout from "./BaseLayout.component";

import "./App.css";

function App() {
  return (
    <BaseLayout>
      <Router>
        <Switch>
          {routes.map(({ component: Component, ...rest }) => (
            <Route
              {...rest} exact
              render={(props) => (
                  <Component {...props} />
              )}
            />
          ))}
        </Switch>
      </Router>
    </BaseLayout>
  );
}

export default App;
