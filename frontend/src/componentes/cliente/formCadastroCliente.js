import { useRef } from "react";
import swal from "sweetalert";

export default function FormCadastroCliente(props) {
    const nomeRef = useRef(null);
    const nomeSocialRef = useRef(null);
    const emailRef = useRef(null);

    async function cadastraCliente() {
        if(nomeRef.current.value.length > 0 && nomeSocialRef.current.value.length > 0 && emailRef.current.value.length){
            const response = await fetch('http://localhost:32831/cliente/cadastrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: nomeRef.current.value,
                    nomeSocial: nomeSocialRef.current.value,
                    email: emailRef.current.value
                }),
            });
            swal({
                title: "Cliente cadastrado!",
                text: "Cliente cadastrado com sucesso!",
                icon: "success",
            })
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
                        Cadastro de Cliente
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
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={cadastraCliente}>Cadastrar</button>
                    </div>
                </form>
            </div>
    )
}