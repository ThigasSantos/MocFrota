import { useState } from "react";
import "../../src/components/css/cadastrarUser.css"
import { postUserLoginData } from "../hooks/useUserData";
import UserModal from "./userModal";


export function cadastrarUser() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [role, setRole] = useState('');

    const handleInputNome = (event: any) => {
        setNome(event.target.value);
    };
    const handleInputEmail = (event: any) => {
        setEmail(event.target.value);
    };
    const handleInputSenha = (event: any) => {
        setSenha(event.target.value);
    };
    const handleInputRole = (event: any) => {
        setRole(event.target.value);
    };

    const [isModalOpen, setIsModaOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModaOpen((prev: any) => !prev);
    };

    const submit = async() =>{
        //await postUserLoginData({nome, email, senha, role});
        handleOpenModal();
        }


    return (
        <><html>
        <body className="cadast-body">
            <div className="row">
            <div className="col-md-12">
            <form className="formCad-User">
            <h1 className="cadast-title"> Cadastro de Usuario </h1>
            
            <fieldset className="campos">
              
              <legend><span className="number">1</span> Informações de Login</legend>
            
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="name" name="user_nome" value={nome} onChange={handleInputNome} required />  
            
              <label htmlFor="email">Email:</label>
              <input type="text" id="mail" name="user_email" value={email} onChange={handleInputEmail} required/>
           
              <label htmlFor="pass">Senha:</label>
              <input type="text" id="password"  name="user_pass" value={senha} onChange={handleInputSenha} required/>

              <label htmlFor="tipo">Tipo:</label>
              <select id="tipo" name="vei_tipo" value={role} onChange={handleInputRole}>
                  <option value="">   </option>
                  <option value="Gerente">Gerente</option>
                  <option value="Condutor">Condutor</option>
              </select> 
            </fieldset>
           
            <button type="button" className="btnSubmit" onClick={submit}>Prossegir</button>
            {isModalOpen && <UserModal role = {role} />}
            
            </form>
            </div>
          </div>
        </body>
    </html></>    
    )
}

export default cadastrarUser;