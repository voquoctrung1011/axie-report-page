import Main from "./pages/report/index";
import "antd/dist/antd.css";
import "./App.css";
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
