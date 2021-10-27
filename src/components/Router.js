import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetallesDepartamento from './Departamentos/DetallesDepartamento';
import EliminarDepartamento from './Departamentos/EliminarDepartamento';
import InsertarDepartamento from './Departamentos/InsertarDepartamento';
import MenuDepartamentos from './Departamentos/MenuDepartamentos';
import TablaDepartamentos from './Departamentos/TablaDepartamentos';
import UpdateDepartamento from './Departamentos/UpdateDepartamento';
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
<Route exact path="/detallesdepartamento/:numero/:nombre/:localidad"
                    render={props => {
                        var numero = props.match.params.numero;
                        var nombre = props.match.params.nombre;
                        var localidad = props.match.params.localidad;
                        return (<DetallesDepartamento
                            iddepartamento={numero}
                            nombre={nombre}
                            localidad={localidad}/>);
                    }}/>
                    <Route exact path="/updatedepartamento/:numero"
                    render={props => {
                        var deptno = props.match.params.numero;
                        return (<UpdateDepartamento
                            iddepartamento={deptno}/>);
                    }}/>

<Route exact path="/deletedepartamento/:numero/:nombre/:localidad"
render={props => {
    var num = props.match.params.numero;
    var nom = props.match.params.nombre;
    var loc = props.match.params.localidad;
    return (<EliminarDepartamento iddepartamento={num}
        nombre={nom} localidad={loc}/>);
}}/>

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
