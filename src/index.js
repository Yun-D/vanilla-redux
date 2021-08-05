import React from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from "./components/App";
import store from './routes/store';

reactDom.render(
  <Provider store={store}>
    {/* index와 store를 연결 */}
    <App />
  </Provider>, 
  document.getElementById("root")); 