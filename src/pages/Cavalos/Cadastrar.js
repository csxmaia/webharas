import {
    useState,
    useEffect
} from 'react'

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
    const [pelagens, setPelagens] = useState();
    const [preco, setPreco] = useState();
    const [racas, setRacas] = useState();
    const [usuarios, setUsuarios] = useState();
    const [videos, setVideos] = useState();

    const [cidade_id, setCidade_id] = useState();
    const [genero_id, setGenero_id] = useState();
    const [habilidade_id, setHabilidade_id] = useState();
    const [haras_id, setHaras_id] = useState();
    const [pelagem_id, setPelagem_id] = useState();
    const [raca_id, setRaca_id] = useState();
    const [usuario_id, set_Usuario_id] = useState();
    const [video_id, setVideo_id] = useState();


    //useEffect é a primeira função que executa ao entrar na tela
    useEffect(() => {
        async function getCidade() {
            const {
                data
            } = await api.get("/cidade")
            setCidades(data)
        }
        async function getGenero() {
            const {
                data
            } = await api.get("/genero")
            setGeneros(data)
        }
        async function getHabilidade() {
            const {
                data
            } = await api.get("/habilidade")
            setHabilidades(data)
        }
        async function getHaras() {
            const {
                data
            } = await api.get("/haras")
            setHaras(data)
        }
        async function getPelagem() {
            const {
                data
            } = await api.get("/pelagem")
            setPelagens(data)
        }
        async function getRaca() {
            const {
                data
            } = await api.get("/raca")
            setRacas(data)
        }
        async function getUsuario() {
            const {
                data
            } = await api.get("/usuario")
            setUsuarios(data)
        }
        async function getVideo() {
            const {
                data
            } = await api.get("/video")
            setVideos(data)
        }
        getCidade()
        getGenero()
        getHabilidade()
        getHaras()
        getPelagem()
        getRaca()
        getUsuario()
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
            pelagem_id,
            preco,
            raca_id,
            usuario_id,
            video_id
        }
        //estrutura para enviar os dados para a url
        const response = await api.post("/cavalo", data)
    }
    //return exibe o que vai ser exibido na tela
    return (
        <div class="container">
            <div class="row justify-content-center" >
                <div class="col-md-9">
                    <div class="card" >
                        <div class="card-header text-center" > < h4 > Cadastrar Cavalo </h4></div >
                        <div class='form-group' >
                            <form onSubmit={
                                e => saveData(e)
                            }>
                                <div class="card-body" >
                                    <div class="input-group input-group-mb mb-3" >
                                        <div class="input-group-prepend" >
                                            <span class="input-group-text"
                                                id="inputGroup-sizing-sm" > Nome </span> </div>
                                        <input type="text"
                                            class="form-control"
                                            onChange={
                                                e => setNome(e.target.value)
                                            } />
                                    </div>

                                    <div class="input-group input-group-mb mb-3" >
                                        <div class="input-group-prepend" >
                                            <span class="input-group-text"
                                                id="inputGroup-sizing-sm" > Descrição </span> </div>
                                        <input type="text"
                                            class="form-control"
                                            onChange={
                                                e => setDescricao(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div class="input-group input-group-mb mb-3" >
                                        <div class="input-group-prepend" >
                                            <span class="input-group-text"
                                                id="inputGroup-sizing-sm" > Dt Nasc </span> </div>
                                        <input type="date"
                                            class="form-control"
                                            onChange={
                                                e => setDtnasc(e.target.value)
                                            } />
                                    </div>

                                    <div class="input-group input-group-mb mb-3" >
                                        <div class="input-group-prepend" >
                                            <span class="input-group-text"
                                                id="inputGroup-sizing-sm" > Preço </span> </div>
                                        <input type="number"
                                            class="form-control"
                                            onChange={
                                                e => setPreco(e.target.value)
                                            } /> </div> {
                                        //Como a busca da cidade demora uma quantidade consideravel de tempo lá no useEffect, devemos fazer a condição
                                        //de que o select da cidade só exiba quando for diferente de indefinido (undefined)
                                        //if ternario:
                                        //
                                        // condicao == true ?
                                        //    codigo caso verdadeiro
                                        // :
                                        //    codigo caso falso
                                    }
                                    <div class="input-group input-group-lg mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">Cidade</span>
                                        </div>
                                        {
                                            cidades !== undefined ?
                                                <select class="form-control" onChange={(e) => setCidade_id(e.target.value)}>
                                                    <option value={0}>Selecione...</option>
                                                    {cidades.map((item) => (
                                                        <option value={item.id}>{item.nome}</option>
                                                    ))}
                                                </select>
                                                : null
                                        }
                                    </div>
                                    <div class="input-group input-group-lg mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">Genero</span>
                                        </div>
                                        {
                                            gereros !== undefined ?
                                                <select class="form-control" onChange={(e) => setGenero_id(e.target.value)}>
                                                    <option value={0}>Selecione...</option>
                                                    {gereros.map((item) => (
                                                        <option value={
                                                            item.id
                                                        } > {
                                                                item.nome
                                                            } </option>
                                                    ))}
                                                </select> :
                                                null
                                        }
                                    </div>
                                    <div class="input-group input-group-lg mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">Habilidades</span>
                                        </div>
                                        {
                                            habilidades !== undefined ?
                                                <select class="form-control" onChange={(e) => setHabilidade_id(e.target.value)}>
                                                    <option value={0}>Selecione...</option>
                                                    {
                                                        habilidades.map((item) => (
                                                            <option value={
                                                                item.id
                                                            } > {
                                                                    item.tipo
                                                                } </option>
                                                        ))
                                                    } </select> :
                                                null
                                        }
                                    </div>
                                    <div class="input-group input-group-lg mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">Haras</span>
                                        </div>
                                        {
                                            haras !== undefined ?
                                                <select class="form-control" onChange={(e) => setHaras_id(e.target.value)}>
                                                    <option value={0}>Selecione...</option>
                                                    {
                                                        haras.map((item) => (
                                                            <option value={
                                                                item.id
                                                            }> {
                                                                    item.nome
                                                                } </option>
                                                        ))
                                                    } </select> :
                                                null
                                        }
                                    </div>
                                    <div class="input-group input-group-lg mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">Pelagens</span>
                                        </div>
                                        {pelagens !== undefined ?
                                            <select class="form-control" onChange={(e) => setPelagem_id(e.target.value)}>
                                                <option value={0}>Selecione...</option>
                                                {pelagens.map((item) => (
                                                    <option value={
                                                        item.id
                                                    } > {
                                                            item.nome
                                                        } </option>
                                                ))} </select> :
                                            null
                                        }
                                    </div>
                                    <div class="input-group input-group-lg mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">Raças</span>
                                        </div>
                                        {
                                            racas !== undefined ?
                                                <select class="form-control" onChange={(e) => setRaca_id(e.target.value)}>
                                                    <option value={0}>Selecione...</option>
                                                    {
                                                        racas.map((item) => (
                                                            <option value={
                                                                item.id
                                                            } > {
                                                                    item.nome
                                                                } </option>
                                                        ))
                                                    } </select> :
                                                null
                                        }
                                    </div>
                                    <div class="input-group input-group-lg mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">Comprador</span>
                                        </div>
                                        {
                                            usuarios !== undefined ?
                                                <select class="form-control" onChange={(e) => set_Usuario_id(e.target.value)}>
                                                    <option value={0}>Selecione...</option>
                                                    {usuarios.map((item) => (<option value={
                                                        item.id
                                                    } > {
                                                            item.nome
                                                        } </option>
                                                    ))
                                                    } </select> :
                                                null
                                        }
                                    </div>
                                    <div class="input-group input-group-lg mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">Videos</span>
                                        </div>
                                        {
                                            videos !== undefined ?
                                                <select class="form-control" onChange={(e) => setVideo_id(e.target.value)}>
                                                    <option value={0}>Selecione...</option>
                                                    {videos.map((item) => (<option value={
                                                        item.id
                                                    } > {
                                                            item.url
                                                        } </option>
                                                    ))
                                                    } </select> :
                                                null
                                        }
                                    </div>
                                    <div class="text-center" >
                                        <button class="btn btn-success mb-2"
                                            type="submit" > Salvar </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cadastrar;