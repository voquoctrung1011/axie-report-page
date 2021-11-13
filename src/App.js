import logo from "./logo.svg";
import Main from "./pages/report/index";
import "./App.css";
// import "./styles/index.scss";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./reducer";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
