import '../../assets/styles/global.scss'
import './styles/index.scss'

import React, { useState, useEffect } from 'react';
import DevForm from '../../components/DevForm'
import DevItem from '../../components/DevItem'
import api from '../../services/api'

function App() {
  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const res = await api.get('/devs')
      setDevs(res.data)
    }
    loadDevs()
  }, [])

  async function handleAddDev(data) {
    var res = await api.post('/devs', data)

    if (!devs.some(dev => dev._id == res.data._id)) {
      setDevs([...devs, res.data])
    }
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => <DevItem dev={dev} key={dev._id} />)}
        </ul>
      </main>
    </div>
  );
}

export default App;
