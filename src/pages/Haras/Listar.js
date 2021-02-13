import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

function Listar() {

  const [haras, setHaras] = useState();

  useEffect(() => {
    async function getHaras() {
      const { data } = await api.get("/cavalo")
      setHaras(data)
    }
    getHaras()
  }, [])

  return (

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9">
          <div class="card">
            <div class="card-header text-center"><h4>Listagem de Haras</h4></div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ flex: '1', textAlign: 'right' }}>
                  <Link to="/cadastrar/haras">
                    <button type="button" class="btn btn-primary mb-2">
                      Cadastrar um Haras
            </button>
                  </Link>
                </div>
              </div>
              <div>
                <div style={{ height: "100px", width: "100px", borderWidth: "1px", borderStyle: 'solid' }}>
                  {haras !== undefined ?
                    haras.map(function (haras) {
                      <div>{haras.nome}</div>
                    })
                    : null
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listar;