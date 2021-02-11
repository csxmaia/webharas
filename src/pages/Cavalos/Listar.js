import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

function Listar() {

  const [cavalos, setCavalos] = useState();

  useEffect(() => {
    async function getCavalos() {
      const { data } = await api.get("/cavalo")
      setCavalos(data)
    }
    getCavalos()
  }, [])
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{display: 'flex', width: '100%'}}>
        <div style={{flex: '1'}}>
          <h4>Listagem de cavalos</h4>
        </div>
        <div style={{flex: '1', textAlign: 'right'}}>
          <Link to="/cadastrar/cavalo">
            <button type="button" class="btn btn-primary mb-2">
              Cadastrar um cavalo
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div style={{height: "100px", width: "100px", borderWidth: "1px", borderStyle: 'solid'}}>
          {cavalos !== undefined ?
            cavalos.map(function(cavalo) {
              <div>{cavalo.nome}</div>
            })
            : null
          }
        </div>
      </div>
    </div>
  )
}

export default Listar;