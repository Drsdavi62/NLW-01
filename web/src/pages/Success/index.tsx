import React from 'react'
import './styles.css'
import { FiCheckCircle } from 'react-icons/fi'

const Success = () => {
    return (
        <div id="page-success">
            <FiCheckCircle className="icon" />
            <h1>Cadastro concluído</h1>
        </div>
    )
}

export default Success