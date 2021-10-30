import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AllFiles from './components/allJsFiles';
import NavbarComponent from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from './components/SearchBar';
ReactDOM.render(
  <React.StrictMode>
    {/* <AllFiles /> */}
    <NavbarComponent />
    <SearchBar />
    <App name= {{value:20}}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
