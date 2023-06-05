import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import '../src/components/css/App.css'
import { Home } from './inteface/home'
import { Login } from './inteface/Login'
import { cadastrarVeiculo } from './inteface/cadastrarVeiculo'
import {editarVeiculo, listarVeiculo} from './inteface/editarVeiculo'
import cadastrarUser from './inteface/cadastrarUser'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" Component={Login} />
      <Route path="/home" Component={Home} />
      <Route path="/cadastroveiculo" Component={cadastrarVeiculo} />
      <Route path="/cadastrousuario" Component={cadastrarUser} />
      <Route path="/listarveiculo" Component={listarVeiculo} />
      <Route path="/editarveiculo/:placa" Component={editarVeiculo} />
      </Routes>
    </Router>
  )
}

export default App
