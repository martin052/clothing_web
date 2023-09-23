import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './contexts/user.context';
import './routes/navigation/insta.component.jsx';
// import InstagramLink from './routes/navigation/insta.component.jsx';
import { ProductsProvider } from './contexts/products.context';





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
      <App />
      </ProductsProvider>
      </UserProvider>
      <i className='createdBy'>Created by <b><i>Martin Trembac</i></b></i>
    </BrowserRouter>
  </React.StrictMode>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
