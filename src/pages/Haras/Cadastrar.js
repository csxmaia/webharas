import { useState, useEffect } from 'react'

import api from '../../services/api'


function Cadastrar() {

    //"Variavel", onde voce consegue setar o valor de nome utilizando a função setNome()
    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();
    const [cidades, setCidades] = useState();
    const [usuarios, setUsuarios] = useState();
    const [contatos, setContatos] = useState();

    const [cidade_id, setCidade_id] = useState();
    const [contato_id, setContato_id] = useState();
    const [usuario_id, setUsuario_id] = useState();

    //useEffect é a primeira função que executa ao entrar na tela
    useEffect(() => {
        async function getCidade() {
            const { data } = await api.get("/cidade")
            setCidades(data)
        }

        getCidade()
    }, [])

    useEffect(() => {
        async function getContato() {
            const { data } = await api.get("/contato")
            setContatos(data)
        }

        getContato()
    }, [])

    useEffect(() => {
        async function getUsuario() {
            const { data } = await api.get("/usuario")
            setUsuarios(data)
        }

        getUsuario()
    }, [])

    // ao clicar no submit cai nessa função
    async function saveData(e) {
        e.preventDefault();
        //cria o objeto data para enviar para a url
        const data = {
            nome,
            cidade_id,
            contato_id,
            descricao,
            usuario_id
        }
        console.warn(nome)
        //estrutura para enviar os dados para a url
        const response = await api.post("/cavalo", data)
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

                                {
                                    //Como a busca da cidade demora uma quantidade consideravel de tempo lá no useEffect, devemos fazer a condição
                                    //de que o select da cidade só exiba quando for diferente de indefinido (undefined)
                                    //if ternario:
                                    //
                                    // condicao == true ?
                                    //    codigo caso verdadeiro
                                    // :
                                    //    codigo caso falso
                                }

                                {
                                    usuarios !== undefined ?
                                        <select>
                                            {usuarios.map((item) => (
                                                <option value={item.id}>{item.nome}</option>
                                            ))}
                                        </select>
                                        : null
                                }
                                <div class="input-group input-group-lg mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">Comprador</span>
                                    </div>
                                    <input type="text" class="form-control" onChange={e => setUsuario_id(e.target.value)} />
                                </div>

                                {
                                    cidades !== undefined ?
                                        <select>
                                            {cidades.map((item) => (
                                                <option value={item.id}>{item.nome}</option>
                                            ))}
                                        </select>
                                        : null
                                }
                                <div class="input-group input-group-lg mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">Cidade</span>
                                    </div>
                                    <input type="text" class="form-control" onChange={e => setCidade_id(e.target.value)} />
                                </div>

                                {
                                    contatos !== undefined ?
                                        <select>
                                            {contatos.map((item) => (
                                                <option value={item.id}>{item.nome}</option>
                                            ))}
                                        </select>
                                        : null
                                }
                                <div class="input-group input-group-lg mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">Contato</span>
                                    </div>
                                    <input type="text" class="form-control" onChange={e => setContato_id(e.target.value)} />
                                </div>


                                {
                                    cidades !== undefined ?
                                        <select>
                                            {cidades.map((item) => (
                                                <option value={item.id}>{item.nome}</option>
                                            ))}
                                        </select>
                                        : null
                                }
                                <div class="input-group input-group-lg mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">Cidade</span>
                                    </div>
                                    <input type="text" class="form-control" onChange={e => setCidade_id(e.target.value)} />
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