import "./App.css";
import Table from "./components/Table/Table";
import Login from "./components/Login/Login";
import Form from "./components/Form/Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import TablePage from "./components/Form/FormTab";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/table" component={Table} />
          {/* <Route path="/form" component={Form} /> */}
          <Route path="/form">
            <Form/>
            </Route>
            {/* <Route path="/showtable">
              <TablePage  />
            </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
