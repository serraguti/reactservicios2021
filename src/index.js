import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import BuscadorCoches from './components/BuscadorCoches/BuscadorCoches';
import BuscadorCustomer from './components/BuscadorCustomer/BuscadorCustomer';
import MaestroDetalleDepartamentos from './components/MaestroDetalleDepartamentos/MaestroDetalleDepartamentos';
import MaestroDetalleDept from './components/MaestroDetalleDepartamentos/MaestroDetalleDept';
import EmpleadosRouter from './components/RutasEmpleadosParametros/EmpleadosRouter';
import ServicioCustomers from './components/ServicioCustomers/ServicioCustomers';
import './index.css';
import Router from './components/Router';

import reportWebVitals from './reportWebVitals';
import MaestroDetalleEmp from './components/MaestroDetalleDepartamentos/MaestroDetalleEmp';

ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
