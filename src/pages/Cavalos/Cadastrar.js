import { useState, useEffect } from 'react'

import api from '../../services/api'


function Cadastrar() {

    //"Variavel", onde voce consegue setar o valor de nome utilizando a função setNome()
    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();
    const [dtnasc, setDtnasc] = useState();
    const [cidades, setCidades] = useState();
    const [gereros, setGeneros] = useState();
    const [habilidades, setHabilidades] = useState();
    const [haras, setHaras] = useState();
    const [linhagens, setLinhagens] = useState();
    const [pelagens, setPelagens] = useState();
    const [preco, setPreco] = useState();
    const [racas, setRacas] = useState();
    const [usuarios, setUsuarios] = useState();
    const [videos, setVideos] = useState();

    const [cidade_id, setCidade_id] = useState();
    const [genero_id, setGenero_id] = useState();
    const [habilidade_id, setHabilidade_id] = useState();
    const [haras_id, setHaras_id] = useState();
    const [linhagem_id, setLinhagem_id] = useState();
    const [pelagem_id, setPelagem_id] = useState();
    const [raca_id, setRaca_id] = useState();
    const [usuario_id, set_Usuario_id] = useState();
    const [video_id, setVideo_id] = useState();


    //useEffect é a primeira função que executa ao entrar na tela
    useEffect(() => {
        async function getCidade() {
            const { data } = await api.get("/cidade")
            setCidades(data)
        }

        getCidade()
    }, [])

    useEffect(() => {
        async function getGenero() {
            const { data } = await api.get("/genero")
            setGeneros(data)
        }
        getGenero()
    }, [])
    useEffect(() => {
        async function getHabilidade() {
            const { data } = await api.get("/habilidade")
            setHabilidades(data)
        }
        getHabilidade()
    }, [])

    useEffect(() => {
        async function getHaras() {
            const { data } = await api.get("/haras")
            setHaras(data)
        }
        getHaras()
    }, [])

    useEffect(() => {
        async function getLinhagem() {
            const { data } = await api.get("/linhagem")
            setLinhagens(data)
        }
        getLinhagem()
    }, [])

    useEffect(() => {
        async function getPelagem() {
            const { data } = await api.get("/pelagem")
            setPelagens(data)
        }
        getPelagem()
    }, [])

    useEffect(() => {
        async function getRaca() {
            const { data } = await api.get("/raca")
            setRacas(data)
        }
        getRaca()
    }, [])

    useEffect(() => {
        async function getUsuario() {
            const { data } = await api.get("/usuario")
            setUsuarios(data)
        }
        getUsuario()
    }, [])

    useEffect(() => {
        async function getVideo() {
            const { data } = await api.get("/video")
            setVideos(data)
        }
        getVideo()
    }, [])

    // ao clicar no submit cai nessa função
    async function saveData(e) {
        e.preventDefault();
        //cria o objeto data para enviar para a url
        const data = {
            nome,
            descricao,
            dtnasc,
            genero_id,
            cidade_id,
            habilidade_id,
            haras_id,
            linhagem_id,
            pelagem_id,
            preco,
            raca_id,
            usuario_id,
            video_id
        }
        console.warn(nome)
        //estrutura para enviar os dados para a url
        const response = await api.post("/cavalo", data)
    }
    //return exibe o que vai ser exibido na tela
    return (
        <div class='form-group' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4>Cadastrar Cavalo</h4>
            <form onSubmit={e => saveData(e)}>
                <div class="input-group input-group-mb mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Nome</span>
                    </div>
                <input type="text" class="form-control" onChange={e => setNome(e.target.value)}/>
                </div>

                <div class="input-group input-group-mb mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Descrição</span>
                    </div>
                <input type="text" class="form-control" onChange={e => setDescricao(e.target.value)}/>
                </div>

                <div class="input-group input-group-mb mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Dt Nasc</span>
                    </div>
                <input type="date" class="form-control" onChange={e => setDtnasc(e.target.value)}/>
                </div>

                <div class="input-group input-group-mb mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Preço</span>
                    </div>
                <input type="number" class="form-control" onChange={e => setPreco(e.target.value)}/>
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
                    cidades !== undefined ?
                        <select>
                            {cidades.map((item) => (
                                <option value={item.id}>{item.nome}</option>
                            ))}
                        </select>
                        : null
                }
                <div class="input-group input-group-mb mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Cidade</span>
                    </div>
                <input type="text" class="form-control" onChange={e => setCidade_id(e.target.value)} />
                </div>

                {
                    gereros !== undefined ?
                        <select>
                            {gereros.map((item) => (
                                <option value={item.id}>{item.nome}</option>
                            ))}
                        </select>
                        : null
                }
                <div class="input-group input-group-mb mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Genero</span>
                    </div>
                <input type="text" class="form-control" onChange={e => setGenero_id(e.target.value)} />
                </div>

                {
                    habilidades !== undefined ?
                        <select>
                            {habilidades.map((item) => (
                                <option value={item.id}>{item.tipo}</option>
                            ))}
                        </select>
                        : null
                }
                <div class="input-group input-group-mb mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Habilidades</span>
                    </div>
                <input type="text" class="form-control" onChange={e => setHabilidade_id(e.target.value)} />
                </div>

                {
                    haras !== undefined ?
                        <select>
                            {haras.map((item) => (
                                <option value={item.id}>{item.nome}</option>
                            ))}
                        </select>
                        : null
                }
                <div class="input-group input-group-mb mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Haras</span>
                    </div>
                <input type="text" class="form-control" onChange={e => setHaras_id(e.target.value)} />
                </div>

                {
                    linhagens !== undefined ?
                        <select>
                            {linhagens.map((item) => (
                                <option value={item.id}>{item.nome}</option>
                            ))}
                        </select>
                        : null
                }
                <div class="input-group input-group-mb mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Linhagem</span>
                    </div>
                <input type="text" class="form-control" onChange={e => setLinhagem_id(e.target.value)} />
                </div>

                {
                    pelagens !== undefined ?
                        <select>
                            {pelagens.map((item) => (
                                <option value={item.id}>{item.nome}</option>
                            ))}
                        </select>
                        : null
                }
                <div class="input-group input-group-mb mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Pelagem</span>
                    </div>
                <input type="text" class="form-control" onChange={e => setPelagem_id(e.target.value)} />
                </div>

                {
                    racas !== undefined ?
                        <select>
                            {racas.map((item) => (
                                <option value={item.id}>{item.nome}</option>
                            ))}
                        </select>
                        : null
                }
                <div class="input-group input-group-mb mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Raça</span>
                    </div>
                <input type="text" class="form-control" onChange={e => setRaca_id(e.target.value)} />
                </div>

                {
                    usuarios !== undefined ?
                        <select>
                            {usuarios.map((item) => (
                                <option value={item.id}>{item.nome}</option>
                            ))}
                        </select>
                        : null
                }
                <div class="input-group input-group-mb mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Comprador</span>
                    </div>
                <input type="text" class="form-control" onChange={e => set_Usuario_id(e.target.value)} />
                </div>

                {
                    
                    videos !== undefined ?
                        <select>
                            {videos.map((item) => (
                                <option value={item.id}>{item.url}</option>
                            ))}
                        </select>
                        : null
                }
                <div class="input-group input-group-mb mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Videos</span>
                    </div>
                <input type="text" class="form-control" onChange={e => setVideo_id(e.target.value)} />
                </div>



                <button type="button" class="btn btn-success mb-2" style={{ float: 'right', marginTop: '16px' }} type="submit">Salvar</button>
            </form>
        </div>
    )
}
export default Cadastrar;