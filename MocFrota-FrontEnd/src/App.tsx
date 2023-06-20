import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import '../src/components/css/App.css'
import { Home } from './inteface/home'
import { Login } from './inteface/Login'
import { cadastrarVeiculo } from './inteface/cadastrarVeiculo'
import {editarVeiculo, listarVeiculo} from './inteface/editarVeiculo'
import {cadastrarUser, editarUser, listarUsers} from './inteface/cadastrarUser'
import { cadastrarEmpresa, editarEmpresa, listarEmpresa } from './inteface/cadastrarEmpresa'
import { checklist } from './inteface/checklist'

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
      <Route path="/listarusers" Component={listarUsers} />
      <Route path="/editaruser/:cpf" Component={editarUser} />
      <Route path="/cadastroempresa" Component={cadastrarEmpresa} />
      <Route path="/listarempresas" Component={listarEmpresa} />
      <Route path="/editarempresa/:cnpj" Component={editarEmpresa} />
      <Route path="/checklist" Component={checklist} />
      </Routes>
    </Router>
  )
}

export default App
