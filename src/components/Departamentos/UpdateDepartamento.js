import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';
import { NavLink, Redirect } from 'react-router-dom';

export default class UpdateDepartamento extends Component {
    cajanumeroRef = React.createRef();
    cajanombreRef = React.createRef();
    cajalocalidadRef = React.createRef();

    state = {
        departamento: null
        , status: false
    }

    buscarDepartamento = () => {
        var id = this.props.iddepartamento;
        var request = "/webresources/departamentos/" + id;
        var url = Global.urlcruddepartamentos + request;
        axios.get(url).then(res => {
            this.setState({
                departamento: res.data
            });
        });
    }

    componentDidMount = () => {
        this.buscarDepartamento();
    }

    modificarDepartamento = (e) => {
        e.preventDefault();
        var num = parseInt(this.cajanumeroRef.current.value);
        var nom = this.cajanombreRef.current.value;
        var loc = this.cajalocalidadRef.current.value;
        var departamento = {
            numero: num
            , nombre: nom
            , localidad: loc
        };
        var request = "/webresources/departamentos/put";
        var url = Global.urlcruddepartamentos + request;
        axios.put(url, departamento).then(res => {
            this.setState({
                status: true
            });
        });
    }

    render() {
        if (this.state.status == true){
            return (<Redirect to={"/departamentos"}/>);
        }
        if (this.state.departamento != null){
            return (
                <div>
                    <h1>Update departamento</h1>
                    <form style={{width: "500px", display: "table"
                    , margin:"0 auto"}}
                    onSubmit={this.modificarDepartamento}>
                        <div className="form-group row">
                            <label>Número</label>
                            <input type="number"
                                className="form-control"
                                ref={this.cajanumeroRef}
                                value={this.state.departamento.numero}
                                disabled/>
                        </div>
                        <div className="form-group row">
                            <label>Nombre </label>
                            <input type="text" className="form-control"
                            ref={this.cajanombreRef}
                            defaultValue={this.state.departamento.nombre}/>
                        </div>
                        <div className="form-group row">
                            <label>Localidad: </label>
                            <input type="text" className="form-control"
                            ref={this.cajalocalidadRef}
                            defaultValue={this.state.departamento.localidad}/>
                        </div>
                        <button className="btn btn-info">
                            Modificar
                        </button>
                        <NavLink to={"/departamentos"} 
                        className="btn btn-success">
                            Volver al listado
                        </NavLink>
                    </form>
                </div>
            )
        }else{
            return (<h1>Cargando...</h1>)
        }
    }
}
