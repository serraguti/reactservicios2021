import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

export default class InsertarDepartamento extends Component {
    cajanumeroRef = React.createRef();
    cajanombreRef = React.createRef();
    cajalocalidadRef = React.createRef();

    state = {
        mensaje: ""
        , status: false
    }

    insertarDepartamento = (e) => {
        e.preventDefault();
        var num = this.cajanumeroRef.current.value;
        var nom = this.cajanombreRef.current.value;
        var loc = this.cajalocalidadRef.current.value;
        var departamento = {
            numero: parseInt(num)
            , nombre: nom
            , localidad: loc
        };
        var request = "/webresources/departamentos/post";
        var url = Global.urlcruddepartamentos + request;
        axios.post(url, departamento).then(res => {
            this.setState({
                mensaje: "Departamento insertado correctamente"
                , status: true
            });
        });
    }

    render() {
        return (
            <div>
                <h1>Nuevo departamento</h1>
                <form style={{width: "500px", display: "table"
                , margin: "0 auto"}} onSubmit={this.insertarDepartamento}>
                    <div className="form-group row">
                        <label>Número: </label>
                        <input type="number" className="form-control"
                        ref={this.cajanumeroRef}/>
                    </div>
                    <div className="form-group row">
                        <label>Nombre: </label>
                        <input type="text" className="form-control"
                        ref={this.cajanombreRef}/>
                    </div>
                    <div className="form-group row">
                        <label>Localidad: </label>
                        <input type="text" className="form-control"
                        ref={this.cajalocalidadRef}/>
                    </div>
                    <button className="btn btn-info">
                        Insertar departamento
                    </button>
                </form>
                <h2 style={{color:"red"}}>
                    {this.state.mensaje}
                </h2>
            </div>
        )
    }
}
