import { useState, useEffect } from 'react'

import api from '../services/api'

function Cadastrar() {

  // const [nome, setNome] = useState();

  useEffect(() => {
    // async function getCidade() {
    //   const { data } = await api.get("/cidade")
    //   setCidades(data)
    // }

    // getCidade()
  }, [])
  
  async function saveData(e) {
    e.preventDefault();
    // const data = {
     
    // }
  
    // const response = await api.post("/usuario", data);
  }
  return (
    <div>

    </div>
  )
}

export default Cadastrar;