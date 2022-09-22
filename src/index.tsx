import { StrictMode } from "react";
import "./index.scss";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { store } from "./redux";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
