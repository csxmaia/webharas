import React from 'react';
import {Link} from 'react-router-dom'

function Admin() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
      <div style={{textAlign: 'center'}}>
        <div>
          <Link to="/estado"><button>Estado</button></Link>
        </div>
        <div>
          <Link to="/cidade"><button>Cidade</button></Link>
        </div>
        <div>
          <Link to="/raca"><button>Raça</button></Link>
        </div>
        <div>
          <Link to="/pelagem"><button>Pelagem</button></Link>
        </div>
        <div>
          <Link to="/genero"><button>Genêro</button></Link>
        </div>
        <div>
          <Link to="/habilidade"><button>Habilidade</button></Link>
          </div>
      </div>
    </div>
  )
}

export default Admin