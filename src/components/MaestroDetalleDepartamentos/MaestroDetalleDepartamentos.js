import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

export default class MaestroDetalleDepartamentos extends Component {
    selectdepartamentosRef = React.createRef();

    state = {
        departamentos: []
        , empleados: []
        , status: false
    }

    buscarEmpleados = (e) => {
        e.preventDefault();
        var deptno = this.selectdepartamentosRef.current.value;
        var request = "/api/Empleados/EmpleadosDepartamento/"
        + deptno;
        var url = Global.urlempleados;
        axios.get(url + request).then(res => {
            this.setState({
                empleados: res.data
            });
        });
    }

    cargarDepartamentos = () => {
        var request = "/api/departamentos";
        var url = Global.urldepartamentos;
        axios.get(url + request).then(res => {
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
        return (
            <div>
                <h1>Maestro detalle Departamentos Empleados</h1>
                <form>
                    <select ref={this.selectdepartamentosRef}>
{this.state.status == true && (
    this.state.departamentos.map((dept, index) => {
        return (<option key={index} value={dept.Numero}>
            {dept.Nombre}
        </option>)
    })
)}
                    </select>
                    <button onClick={this.buscarEmpleados}>
                        Mostrar empleados
                    </button>
                </form>
                <hr/>
                {this.state.empleados.length > 0 && (
                    <ul>
                       {this.state.empleados.map((emp, index) => {
                           return (<li key={index}>{emp.apellido}</li>)
                       })} 
                    </ul>
                )}
            </div>
        )
    }
}
