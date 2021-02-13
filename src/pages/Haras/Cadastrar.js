import { useState, useEffect } from 'react'

import api from '../../services/api'


function Cadastrar() {

    const [cidades, setCidades] = useState();
    const [usuarios, setUsuarios] = useState();

    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();

    const [nomeContato, setNomeContato] = useState();
    const [telefoneContato, setTelefoneContato] = useState();

    const [cidade_id, setCidade_id] = useState();
    const [usuario_id, setUsuario_id] = useState();

    //useEffect é a primeira função que executa ao entrar na tela
    useEffect(() => {
        async function getCidade() {
            const { data } = await api.get("/cidade")
            setCidades(data)
        }
        async function getUsuarios() {
            const { data } = await api.get("/usuario")
            setUsuarios(data)
        }

        getUsuarios()
        getCidade()
    }, [])

    // ao clicar no submit cai nessa função
    async function saveData(e) {
        e.preventDefault();

        const objectToContato = {
            nome: nomeContato,
            telefone: telefoneContato
        }
        const response = await api.post("/telefonecontatoharas/return", objectToContato)

        const data = {
            nome,
            descricao,
            cidade_id,
            usuario_id: parseInt(usuario_id),
            contato_id: response.data.id,
        }
        console.warn(data)
        // const responseHaras = await api.post("/haras", data)
        // console.warn(responseHaras)
        // alert("Haras cadastrado")
    }
    //return exibe o que vai ser exibido na tela
    return (

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9">
                    <div class="card">
                        <div class="card-header text-center"><h4>Cadastrar Haras</h4></div>
                        <form onSubmit={e => saveData(e)}>
                            <div class="card-body">
                                <div class="input-group input-group-lg mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">Nome</span>
                                    </div>
                                    <input type="text" class="form-control" onChange={e => setNome(e.target.value)} />
                                </div>

                                <div class="input-group input-group-lg mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">Descrição</span>
                                    </div>
                                    <input type="text" class="form-control" onChange={e => setDescricao(e.target.value)} />
                                </div>
                                <div>
                                    Cidade
                                    {
                                        cidades !== undefined ?
                                            <select onChange={(e) => setCidade_id(e.target.value)}>
                                                <option value={0}>Selecione...</option>
                                                {cidades.map((item) => (
                                                    <option value={item.id}>{item.nome}</option>
                                                ))}
                                            </select>
                                            : null
                                    }
                                </div>
                                <div>
                                    Seu usuario
                                    {
                                        usuarios !== undefined ?
                                            <select onChange={(e) => setUsuario_id(e.target.value)}>
                                                <option value={0}>Selecione...</option>
                                                {usuarios.map((item) => (
                                                    <option value={item.id}>{item.nome}</option>
                                                ))}
                                            </select>
                                            : null
                                    }
                                </div>
                                <br/>
                                <h4>Contato</h4>
                                <div class="input-group input-group-lg mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">Nome</span>
                                    </div>
                                    <input type="text" class="form-control" onChange={e => setNomeContato(e.target.value)} />
                                </div>

                                <div class="input-group input-group-lg mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">Telefone</span>
                                    </div>
                                    <input type="text" class="form-control" onChange={e => setTelefoneContato(e.target.value)} />
                                </div>

                                <div class="text-center">
                                    <button class="btn btn-success mb-2" type="submit">Salvar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cadastrar;