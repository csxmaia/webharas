import { useState, useEffect } from 'react'

import api from '../../services/api'


function Cadastrar() {

    //"Variavel", onde voce consegue setar o valor de nome utilizando a função setNome()
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [cpf, setCpf] = useState();
    const [telefone, setTelefone] = useState();
    const [whatsapp, setWhatsapp] = useState();
    const [senha, setSenha] = useState();
    const [cidades, setCidades] = useState();
    const [cidade_id, setCidade_id] = useState();

    //useEffect é a primeira função que executa ao entrar na tela
    useEffect(() => {
        async function getCidade() {
            const { data } = await api.get("/cidade")
            setCidades(data)
        }

        getCidade()
    }, [])

    // ao clicar no submit cai nessa função
    async function saveData(e) {
        e.preventDefault();
        //cria o objeto data para enviar para a url
        const data = {
            nome,
            email,
            cpf,
            telefone,
            whatsapp,
            senha,
            cidade_id
        }
        console.warn(nome)
        //estrutura para enviar os dados para a url
        const response = await api.post("/cavalo", data)
    }
    //return exibe o que vai ser exibido na tela
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            Cadastrar Cavalo
            <form onSubmit={e => saveData(e)}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    Nome:
              <input onChange={e => setNome(e.target.value)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    Email:
              <input onChange={e => setEmail(e.target.value)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    Cpf:
              <input onChange={e => setCpf(e.target.value)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    Telefone:
              <input onChange={e => setTelefone(e.target.value)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    Whatsapp:
              <input onChange={e => setWhatsapp(e.target.value)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    Senha:
              <input onChange={e => setSenha(e.target.value)} />
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
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    Cidade:
              <input onChange={e => setCidade_id(e.target.value)} />
                </div>
                <button style={{ float: 'right', marginTop: '16px' }} type="submit">Salvar</button>
            </form>
        </div>
    )
}
export default Cadastrar;