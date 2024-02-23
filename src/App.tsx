import React, { useEffect } from "react";
import "./App.css";
import Router from "./routes/Router";
import {store, persistor} from "./store";
import { Provider } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { PersistGate } from "redux-persist/integration/react";


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
