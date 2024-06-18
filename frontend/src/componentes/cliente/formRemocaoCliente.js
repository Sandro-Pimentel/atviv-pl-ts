import { useRef } from "react";
import swal from "sweetalert";

export default function FormRemocaoCliente(props) {
    const idRef = useRef(null);

    async function removeCliente() {
        if(idRef.current.value.length > 0){
            const response = await fetch('http://localhost:32831/cliente/excluir', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: idRef.current.value,
                }),
            });
            swal({
                title: "Cliente removido!",
                text: "Cliente removido com sucesso!",
                icon: "success",
            })
            idRef.current.value = ''
        }
    }

    let tema = props.tema
    return (
        <div className="container-fluid">
            <form>
                <div className="alert alert-info" role="alert">
                    Remoção de Cliente
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>ID</span>
                    <input type="text" className="form-control" placeholder="0" aria-label="ID" aria-describedby="basic-addon1" ref={idRef}/>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={removeCliente}>Remover</button>
                </div>
            </form>
        </div>
    )
}