import { useState, useEffect } from 'react'

import api from '../services/api'

function Registrar() {

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
    console.warn(data)
    //estrutura para enviar os dados para a url
    const response = await api.post("/usuario", data);
  }
  //return exibe o que vai ser exibido na tela
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9">
          <div class="card">
            <div class="card-header text-center"><h4>Registrar</h4></div>

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
                    <span class="input-group-text" id="inputGroup-sizing-sm">E-mail</span>
                  </div>
                  <input type="text" class="form-control" onChange={e => setEmail(e.target.value)} />
                </div>

                <div class="input-group input-group-lg mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">CPF</span>
                  </div>
                  <input type="text" class="form-control" onChange={e => setCpf(e.target.value)} />
                </div>

                <div class="input-group input-group-lg mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Telefone</span>
                  </div>
                  <input type="text" class="form-control" onChange={e => setTelefone(e.target.value)} />
                </div>

                <div class="input-group input-group-lg mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Whatsapp</span>
                  </div>
                  <input type="text" class="form-control" onChange={e => setWhatsapp(e.target.value)} />
                </div>

                <div class="input-group input-group-lg mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Senha</span>
                  </div>
                  <input type="password" class="form-control" onChange={e => setSenha(e.target.value)} />
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

export default Registrar;