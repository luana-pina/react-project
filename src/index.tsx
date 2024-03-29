import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import ReactDOM from "react-dom";
import store from "@store/";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
