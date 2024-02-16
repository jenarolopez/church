import React, { useEffect } from "react";
import "./App.css";
import Router from "./routes/Router";
import store from "./store";
import { Provider } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
