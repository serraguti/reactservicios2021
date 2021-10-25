import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

export default class BuscadorCoches extends Component {
    cajamarcaRef = React.createRef();

    state = {
        coches: []
        , temp: []
    }
    
    buscarCoches = (e) => {
        e.preventDefault();
        var coches = this.state.temp;
        var marca = this.cajamarcaRef.current.value.toLowerCase();
        //VOY A UTILIZAR EL METODO filter() DE ARRAY
        //.filter(obj => obj.propiedad == valor)
        var filtro = 
        coches.filter(car => car.marca.toLowerCase().includes(marca));
        //REASIGNAMOS EL STATE EN EL FILTRO
        this.setState({
            coches: filtro
        });
    }

    cargarCoches = (e) => {
        if (e != null){
            e.preventDefault();
        }
        var request = "/webresources/coches";
        var url = Global.urlcoches;
        axios.get(url + request).then(res => {
            this.setState({
                coches: res.data
                , temp: res.data
            });
        });
    };

    componentDidMount = () => {
        this.cargarCoches();
    }

    render() {
        return (
            <div>
                <h1>Ejemplo Api Coches</h1>
                <form>
                    <label>Marca: </label>
                    <input type="text" required ref={this.cajamarcaRef}/>
                    <button onClick={this.buscarCoches}>
                        Filtrar coches
                    </button>
                    <button onClick={this.cargarCoches}>
                        Cargar todos los coches
                    </button>
                </form>
                <table border="1">
                    <thead>
                        <tr>
                            <th>MARCA</th>
                            <th>MODELO</th>
                            <th>CONDUCTOR</th>
                            <th>IMAGEN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.coches.map((coche, index) => {
                            return (<tr key={index}>
                                <td>{coche.marca}</td>
                                <td>{coche.modelo}</td>
                                <td>{coche.conductor}</td>
                                <td>
                                    <img style={{width: "150px", height: "150px"}}
                                    src={coche.imagen}/>
                                </td>
                            </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
