import { Routes } from 'react-router-dom';
// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Links from './router/Links';
import Router from './router/Routers';

function App () {
  return (
    <div>
    <BrowserRouter> 
       <Links />
       <Router />
    </BrowserRouter>
    </div>
  );
}
export default App