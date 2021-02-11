import React from 'react';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div class="container">
      <div class="container text-center">
        <br></br>

        <div class="form-group">
          <Link to="/registrar"><button style={{width: '20%'}} type="button"  class="btn btn-primary">Registrar</button></Link>
        </div>
        <div class="form-group">
          <Link to="/login"><button style={{width: '20%'}} type="button" class="btn btn-primary">Login</button></Link>
        </div>
        <div class="form-group" >
          <Link to="/cavalos"><button style={{width: '20%'}} type="button" class="btn btn-primary">Cavalos</button></Link>
        </div>
        {/* <div>
          <Link to="/admin"><button>Admin</button></Link>
        </div> */}
        <div class="form-group">
          <Link to="/haras"><button style={{width: '20%'}}  type="button" class="btn btn-primary">Haras</button></Link>
        </div>


      </div>
    </div>
  )
}

export default Home