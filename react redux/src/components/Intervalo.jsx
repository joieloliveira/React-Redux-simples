import './Intervalo.css';
import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import {alterarNumeroMinimo} from '../store/actions/numeros';
import {alterarNumeroMaximo} from '../store/actions/numeros';

function Intervalo(props) {
    const {min,max} = props;
    
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo" >
                <samp>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} 
                        onChange={e => props.alterarMinimo(+e.target.value)}/>
                </samp>
                <samp>
                    <strong>Máximo:</strong>
                    <input type="number" value={max}
                        onChange={e => props.alterarMaximo(+e.target.value)}/>
                </samp>
            </div>
        </Card> 
             
    )
}

function mapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            // action creator -> action
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        },
        alterarMaximo(novoNumero) {
            // action creator -> action
            const action = alterarNumeroMaximo(novoNumero);
            dispatch(action);
        },
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps)(Intervalo)