import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

function Listar() {

  const [usuario_id, setUsuario_id] = useState();
  const [cavalos, setCavalos] = useState();

  useEffect(() => {
    async function getCavalos() {
      const { data } = await api.get("/cavalo/avenda")
      console.warn(data)
      setCavalos(data)
    }
    getCavalos()
  }, [])

  async function comprarCavalo(id) {
    const objectTo = {
      cavalo_id: id,
      quantidade: 1,
      usuario_id: parseInt(usuario_id)
    }
    console.warn(objectTo)
    await api.post("/venda/realizar-venda", objectTo)
    alert("compra realizada")
    window.location.reload()
  }

  return (

    <div class="container">
      <div class="row justify-content-center">
        {/* <div class="col-md-9"> */}
          <div class="card" style={{width: "100%"}}>
            <div class="card-header text-center"><h4>Listagem de Cavalos</h4></div>
            <div class="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ flex: '1', textAlign: 'right' }}>
                  <Link to="/cadastrar/cavalo">
                    <button type="button" class="btn btn-primary mb-2">
                      Cadastrar um cavalo
                    </button>
                  </Link>
                </div>
              </div>
                <span>Insira seu id de usuario</span>
                <input onChange={(e) => setUsuario_id(e.target.value)} />
              <div style={{display: 'flex', margin: '12px'}}>
                {cavalos !== undefined ?
                  cavalos.map((cavalo) => ( 
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", minHeight: "150px", width: "150px", margin: '12px', padding: '6px', borderWidth: "1px", borderStyle: 'solid'}}>
                      <span>{cavalo.nome}</span>
                      {cavalo.imagens[0] !== undefined? (<img width="80" height="80" src={cavalo.imagens[0].url} />) : null}
                      <div style={{paddingLeft: "8px"}}>
                        <span>{cavalo.descricao}</span>
                      </div>
                      <div>
                        <button>Visualizar</button>
                        <button onClick={() => comprarCavalo(cavalo.id)}>Comprar cavalo</button>
                      </div>
                    </div>
                  ))
                  : null
                }
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Listar;