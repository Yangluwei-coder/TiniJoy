import ReactDOM from 'react-dom';
import App from './App';
import { store } from '../src/store/store';
import { Provider } from 'react-redux';
import { createRoot } from "react-dom/client";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
