import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./reducer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Report from "./pages/report/index";
import FilterList from "./pages/filter-list/index";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Report} />
            <Route exact path="/filters" component={FilterList} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
