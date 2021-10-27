import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';

export default class EliminarDepartamento extends Component {
    cajanumRef = React.createRef();

    state = {
        status: false
    }

    deleteDepartamento = (e) => {
        e.preventDefault();
        var num = this.cajanumRef.current.value;
        var request = "/webresources/departamentos/delete/" + num;
        var url = Global.urlcruddepartamentos + request;
        axios.delete(url).then(res => {
            this.setState({
                status: true
            });
        });
    }

    render() {
        if (this.state.status == true){
            return (<Redirect to="/departamentos"/>);
        }

        return (
            <div>
                <h1>¿Desea eliminar el departamento de 
                    {this.props.nombre} en 
                    {this.props.localidad}?</h1>
                <NavLink to={"/departamentos"} className="btn btn-default">
                    Cancelar
                </NavLink>
                <form onSubmit={this.deleteDepartamento}>
                    <input type="hidden"
                    ref={this.cajanumRef}
                    defaultValue={this.props.iddepartamento}/>
                    <button className="btn btn-danger">
                        Eliminar departamento
                    </button>
                </form>
            </div>
        )
    }
}
