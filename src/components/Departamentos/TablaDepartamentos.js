import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';
import { NavLink } from 'react-router-dom';

export default class TablaDepartamentos extends Component {
    state = {
        departamentos: []
        , status: false
    }

    cargarDepartamentos = () => {
        var request = "/webresources/departamentos";
        var url = Global.urlcruddepartamentos + request;
        axios.get(url).then(res => {
            this.setState({
                departamentos: res.data
                , status: true
            });
        });
    }

    componentDidMount = () => {
        this.cargarDepartamentos();
    }

    render() {
        if (this.state.status == true){
            return (
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <th>NUMERO</th>
                            <th>NOMBRE</th>
                            <th>LOCALIDAD</th>
                            <th>Acciones</th>
                        </thead>
                        <tbody>
                            {this.state.departamentos.map((dept, index)=> {
                                return (<tr key={index}>
                                    <td>{dept.numero}</td>
                                    <td>{dept.nombre}</td>
                                    <td>{dept.localidad}</td>
                                    <td>
<NavLink to={"/detallesdepartamento/" + dept.numero
+ "/" + dept.nombre + "/" + dept.localidad} className="btn btn-success">
 Detalles
</NavLink>
<NavLink to={"/updatedepartamento/" + dept.numero}
className="btn btn-info">
    Editar
</NavLink>     
<NavLink to={"/deletedepartamento/" + dept.numero + "/" + dept.nombre
+ "/" + dept.localidad} className="btn btn-danger">
    Eliminar departamento
</NavLink>              
                                    </td>
                                </tr>);
                            })}
                        </tbody>
                    </table>
                </div>
            )
        }else if (this.state.status == false){
            return (<h1>Cargando registros....</h1>);
        }
    }
}
