import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

function Sorteio (props) {
    const {min,max} = props

    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;

    return (
        <Card title="Sorteio dos Números" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card> 
             
    )
}

function mapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max,
        nomes: state.nomes
    }
}

export default connect(mapStateToProps)(Sorteio)