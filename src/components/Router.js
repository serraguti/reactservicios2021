import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InsertarDepartamento from './Departamentos/InsertarDepartamento';
import MenuDepartamentos from './Departamentos/MenuDepartamentos';
import TablaDepartamentos from './Departamentos/TablaDepartamentos';
import DetalleEmpleadoRouter from './RutasEmpleadosParametros/DetalleEmpleadoRouter';
import EmpleadosRouter from './RutasEmpleadosParametros/EmpleadosRouter';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuDepartamentos/>
                <Switch>
                    <Route exact path="/departamentos"
                    component={TablaDepartamentos}/>
                    <Route exact path="/createdepartamento"
                    component={InsertarDepartamento}/>
                    {/* <Route exact path="/detallesempleado/:idempleado"
                            render={props => {
                                var id = props.match.params.idempleado;
                                return <DetalleEmpleadoRouter
                                idempleado={id}/>
                            }}/> */}
                </Switch>
                {/* <EmpleadosRouter/> */}
            </BrowserRouter>
        )
    }
}
