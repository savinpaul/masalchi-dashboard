import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DashboardSP from "./pages/DashboardSP";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Main>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard-sp" component={DashboardSP} />
          <Route exact path="/" component={DashboardSP} />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
