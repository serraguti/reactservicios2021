import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class DetallesDepartamento extends Component {

    render() {
        return (
            <div>
                <h1>Detalles departamento</h1>
                <h2>Número: {this.props.iddepartamento}</h2>
                <h2>Nombre: {this.props.nombre}</h2>
                <h2>Localidad: {this.props.localidad}</h2>
                <NavLink to={"/departamentos"} className="btn btn-success">
                    Volver al listado
                </NavLink>
                <NavLink to={"/updatedepartamento/" 
                + this.props.iddepartamento} className="btn btn-info">
                    Editar
                </NavLink>
            </div>
        )
    }
}
