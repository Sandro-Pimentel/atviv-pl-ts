export default function FormCadastroPet(props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
            <form>
                <div className="alert alert-info" role="alert">
                    Cadastro de Pet
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>CPF do Dono</span>
                    <input type="text" className="form-control" placeholder="987.654.321-01" aria-label="CPFDono" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Nome</span>
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Tipo</span>
                    <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Raça</span>
                    <input type="text" className="form-control" placeholder="Raça" aria-label="Raca" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Gênero</span>
                    <input type="text" className="form-control" placeholder="Gênero" aria-label="Genero" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}