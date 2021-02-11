import React from 'react';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
      <div style={{textAlign: 'center'}}>
        <div>
          <Link to="/registrar"><button>Registrar</button></Link>
        </div>
        <div>
          <Link to="/login"><button>Login</button></Link>
        </div>
        <div>
          <Link to="/cavalos"><button>Cavalos</button></Link>
        </div>
        {/* <div>
          <Link to="/admin"><button>Admin</button></Link>
        </div> */}
        <div>
          <Link to="/haras"><button>Haras</button></Link>
        </div>


      </div>
    </div>
  )
}

export default Home