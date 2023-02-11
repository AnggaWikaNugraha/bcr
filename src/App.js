import React from "react";
import SetupRouter from "./routes/SetupRouter";
import { Provider } from 'react-redux';
import Redux from './redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={Redux.store}>
        <SetupRouter />
      </Provider>
    </div>
  );
}

export default App;
