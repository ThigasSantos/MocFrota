import { useState } from "react";
import "../../src/components/css/cadastrarUser.css"
import { getPessoa, getUsersData, postUserLoginData } from "../hooks/useUserData";
import UserModal from "./userModal";
import ListU from "../components/list/list";
import { useParams } from "react-router-dom";


export function cadastrarUser() {

  const [name, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
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

    const [data, setData] = useState({id:-1});

    const submit = async() =>{
        let res:any;
        try{res = await postUserLoginData({name, email, password, role});
        }catch(err){
            alert("Erro ao cadastrar usuario");
        }

        if(res.status === 200){
            setData(res.data);
            handleOpenModal();
        }else{
            alert("Erro ao cadastrar usuario");
        }
        
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
              <input type="text" id="name" name="user_nome" value={name} onChange={handleInputNome} required />  
            
              <label htmlFor="email">Email:</label>
              <input type="text" id="mail" name="user_email" value={email} onChange={handleInputEmail} required/>
           
              <label htmlFor="pass">Senha:</label>
              <input type="text" id="password"  name="user_pass" value={password} onChange={handleInputSenha} required/>

              <label htmlFor="tipo">Tipo:</label>
              <select id="tipo" name="vei_tipo" value={role} onChange={handleInputRole}>
                  <option value="">   </option>
                  <option value="Gerente">Gerente</option>
                  <option value="Condutor">Condutor</option>
              </select> 
            </fieldset>
           
            <button type="button" className="btnSubmit" onClick={submit}>Prossegir</button>
            {isModalOpen && <UserModal name={name} role = {role} id = {data.id}/>}
            
            </form>
            </div>
          </div>
        </body>
    </html></>    
    )
}

export function listarUsers(){
    const { data } = getUsersData();

    return(
        <div>
            <h2><strong>Usuarios<span></span></strong></h2>
            <div className="list-grip">
                {data?.map(UserData => <ListU name={UserData.name} cpf={UserData.cpf} role={UserData.role}/>)}
            </div>
        </div>
    )
}

export function editarUser(){

    const{cpf:id} = useParams();

    const {data} = getPessoa(id)||{data:undefined};

    const [name, setNome] = useState(data?.name);
    const [email, setEmail] = useState(data?.user.email);
    const [password, setSenha] = useState(data?.user.password);
    const [role, setRole] = useState(data?.role);

    const [cpf, setCPF] = useState(data?.cpf);
    const [telefone, setTelefone] = useState(data?.telefone);
    const [cnh, setCnh] = useState(data?.cnh);

    const [cep, setCep] = useState(data?.address.cep);
    const [logradouro, setLogradouro] = useState(data?.address.logradouro);
    const [bairro, setBairro] = useState(data?.address.bairro);
    const [cidade, setCidade] = useState(data?.address.cidade);
    const [estado, setEstado] = useState(data?.address.estado);
    const [numero, setNumero] = useState(data?.address.numero);
    const [complemento, setComplemento] = useState(data?.address.complemento);


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

    const handleInputCPF = (event: any) => {
        setCPF(event.target.value);
    };
    const handleInputTelefone = (event: any) => {
        setTelefone(event.target.value);
    };
    const handleInputCnh = (event: any) => {
        setCnh(event.target.value);
    };
    const handleInputCep = (event: any) => {
        setCep(event.target.value);
    };
    const handleInputLogradouro = (event: any) => {
        setLogradouro(event.target.value);
    };
    const handleInputBairro = (event: any) => {
        setBairro(event.target.value);
    };
    const handleInputCidade = (event: any) => {
        setCidade(event.target.value);
    };
    const handleInputEstado = (event: any) => {
        setEstado(event.target.value);
    };
    const handleInputNumero = (event: any) => {
        setNumero(event.target.value);
    };
    const handleInputComplemento = (event: any) => {
        setComplemento(event.target.value);
    };

    const submit = async() =>{
        let res:any;
        try{res = await postUserLoginData({name, email, password, role});
        }catch(err){
            alert("Erro ao cadastrar usuario");
        }

        if(res.status === 200){
            
        }else{
            alert("Erro ao cadastrar usuario");
        }
        
        }


    return (
        <><html>
        <body className="cadast-body">
            <div className="row">
            <div className="col-md-12">
            <form className="formCad-User">
            <h1 className="cadast-title"> Edição de Usuario </h1>
            
            <fieldset className="campos">
              
              <legend><span className="number">1</span> Informações de Login</legend>
            
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="name" name="user_nome" value={name} onChange={handleInputNome} required />  
            
              <label htmlFor="email">Email:</label>
              <input type="text" id="mail" name="user_email" value={email} onChange={handleInputEmail} required/>
           
              <label htmlFor="pass">Senha:</label>
              <input type="text" id="password"  name="user_pass" value={password} onChange={handleInputSenha} required/>

              <label htmlFor="tipo">Tipo:</label>
              <select id="tipo" name="vei_tipo" value={role} onChange={handleInputRole}>
                  <option value="">   </option>
                  <option value="Gerente">Gerente</option>
                  <option value="Condutor">Condutor</option>
              </select> 
            </fieldset>
           
            <form className="formCad-User">          
            <fieldset className="campos">
              
              <legend><span className="number">2</span> Informações do Usuario</legend>
            
              <label htmlFor="cpf">CPF:</label>
              <input type="text" id="name" name="user_cpf" value={cpf} onChange={handleInputCPF} required />  
            
            {(role == "Condutor")&&
                (<> <label htmlFor="cnh">CNH:</label>
                <input type="text" id="cnh" name="user_cnh" value={cnh} onChange={handleInputCnh} required/> 
                </>)
            }
              <label htmlFor="telefone">Telefone:</label>
              <input type="text" id="tel"  name="user_telefone" value={telefone} onChange={handleInputTelefone} required/>

              <label htmlFor="cep">CEP:</label>
                <input type="text" id="cep" name="user_cep" value={cep} onChange={handleInputCep} required/>

              <label htmlFor="logradouro">Logradouro:</label>
                  <input type="text" id="logradouro" name="user_logradouro" value={logradouro} onChange={handleInputLogradouro} required/>    
              
              <label htmlFor="bairro">Bairro:</label>
                    <input type="text" id="bairro" name="user_bairro" value={bairro} onChange={handleInputBairro} required/>

              <label htmlFor="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="user_cidade" value={cidade} onChange={handleInputCidade} required/>

              <label htmlFor="estado">Estado:</label>
                    <input type="text" id="estado" name="user_estado" value={estado} onChange={handleInputEstado} required/>

                <label htmlFor="numero">Numero:</label>
                    <input type="text" id="numero" name="user_numero" value={numero} onChange={handleInputNumero} required/>

              <label htmlFor="complemento">Complemento:</label>
                    <input type="text" id="complemento" name="user_complemento" value={complemento} onChange={handleInputComplemento} required/>           

            </fieldset>
           
            <button type="button" className="btnSubmit" onClick={submit}>Cadastrar</button>
            
            </form>
            
            </form>
            </div>
          </div>
        </body>
    </html></>    
    )
}