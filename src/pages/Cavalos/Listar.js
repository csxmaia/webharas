import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

function Listar() {

  const [cavalos, setCavalos] = useState();

  useEffect(() => {
    async function getCavalos() {
      const { data } = await api.get("/cavalo")
      console.warn(data)
      setCavalos(data)
    }
    getCavalos()
  }, [])

  return (

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9">
          <div class="card">
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
      <div>
        {cavalos !== undefined ?
          cavalos.map((cavalo) => ( 
            <div style={{height: "150px", width: "150px", borderWidth: "1px", borderStyle: 'solid'}}>
              <img src={cavalo.imagens[0].url} />
              {cavalo.nome}
              {cavalo.descricao}
              {/* console.warn(cavalo) */}
              {/* // <div>{cavalo.nome}</div> */}
              <div styl>
                <button>Comprar cavalo</button>
              </div>
            </div>
          ))
          : null
        }
      </div>
    </div>
  )
}

export default Listar;