import { useRef } from "react";
import swal from "sweetalert";

export default function FormAlteracaoCliente(props) {
    const idRef = useRef(null);
    const nomeRef = useRef(null);
    const nomeSocialRef = useRef(null);
    const emailRef = useRef(null);

    async function alteraCliente() {
        if(idRef.current.value.length > 0 && nomeRef.current.value.length > 0 && nomeSocialRef.current.value.length > 0 && emailRef.current.value.length){
            const response = await fetch('http://localhost:32831/cliente/atualizar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: idRef.current.value,
                    nome: nomeRef.current.value,
                    nomeSocial: nomeSocialRef.current.value,
                    email: emailRef.current.value
                }),
            });
            swal({
                title: "Cliente alterado!",
                text: "Cliente alterado com sucesso!",
                icon: "success",
            })
            idRef.current.value = ''
            nomeRef.current.value = ''
            nomeSocialRef.current.value = ''
            emailRef.current.value = ''
        }
    }

    let tema = props.tema
    return (
        <div className="container-fluid">
            <form>
                <div className="alert alert-info" role="alert">
                    Alteração de Cliente
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>ID</span>
                    <input type="text" className="form-control" placeholder="0" aria-label="ID" aria-describedby="basic-addon1" ref={idRef}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Nome</span>
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" ref={nomeRef}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Nome Social</span>
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" ref={nomeSocialRef}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Email</span>
                    <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" ref={emailRef}/>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={alteraCliente}>Alterar</button>
                </div>
            </form>
        </div>
    )
}