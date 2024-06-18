import { useEffect, useState } from "react"

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaCliente(props) {
    const [clientes, setClientes] = useState([])

    useEffect(() => {
        carregaClientes();
    }, [])

    async function carregaClientes() {
        const response = await fetch('http://localhost:32831/cliente/clientes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const result = await response.json();
        setClientes(result);
    }

    let tema = props.tema
    return (
        <div className="container-fluid">
            <div className="alert alert-info" role="alert">
                Lista de Clientes
            </div>
            <div className="list-group">
                {clientes.map((cliente, index) => (
                    <a key={index} href="#" className="list-group-item list-group-item-action">{cliente.id} | {cliente.nome} | {cliente.nomeSocial} | {cliente.email}</a>
                ))}
            </div>
        </div>
    )
}