import { useState } from "react";
import "../../src/components/css/cadastrarUser.css"
import { ListV } from "../components/list/list";
import { useNavigate, useParams } from "react-router-dom";
import { getEmpresa, getEmpresaData, postAtualizarEmpresaData, postEmpresaData, postExcluirEmpresa } from "../hooks/useEmpresaData";


export function cadastrarEmpresa() {

  const navigate = useNavigate();

  const [cnpj, setCnpj] = useState(null);
  const [name, setNome] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');  

    const handleInputCnpj = (event: any) => {
        setCnpj(event.target.value);
        };
    const handleInputNome = (event: any) => {
        setNome(event.target.value);
        };
    const handleInputTelefone = (event: any) => {
        setTelefone(event.target.value);
        };
    const handleInputEmail = (event: any) => {
        setEmail(event.target.value);
        };
    const handleInputStatus = (event: any) => {
        setStatus(event.target.value);
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
        try{res = await postEmpresaData({cnpj, name, telefone, email, status,address:{cep, logradouro, bairro, cidade, estado, numero, complemento}});
        }catch(err){
            alert("Erro ao cadastrar usuario");
        }

        if(res.status === 200){
            alert("Usuario cadastrado com sucesso");
            navigate("/home");
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
            <h1 className="cadast-title"> Cadastro de Empresa </h1>
            
            <fieldset className="campos">
              
              <legend><span className="number">1</span> Principais Informações</legend>
            
              <label htmlFor="nome">CNPJ:</label>
              <input type="text" id="name" name="user_nome" value={cnpj} onChange={handleInputCnpj} required />  
            
              <label htmlFor="email">Nome:</label>
              <input type="text" id="mail" name="user_email" value={name} onChange={handleInputNome} required/>
           
              <label htmlFor="pass">Telefone:</label>
              <input type="text" id="password"  name="user_pass" value={telefone} onChange={handleInputTelefone} required/>

              <label htmlFor="pass">Email:</label>
              <input type="text" id="password"  name="user_pass" value={email} onChange={handleInputEmail} />

              <label htmlFor="pass">Tipo:</label>
              <input type="text" id="password"  name="user_pass" value={status} onChange={handleInputStatus} required/>

            </fieldset>
           
            <form className="formCad-User">          
            <fieldset className="campos">
              
              <legend><span className="number">2</span> Informaações de Endereço: </legend>
            
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

export function listarEmpresa(){
    const { data } = getEmpresaData();

    return(
        <div>
            <h2><strong>Empresas Parceiras<span></span></strong></h2>
            <div className="list-grip">
                {data?.map(EmpData => <ListV name={EmpData.name} cnpj={EmpData.cnpj} status={EmpData.status} telefone={EmpData.telefone}/>)}
            </div>
        </div>
    )
}

export function editarEmpresa(){

    const{cnpj:id} = useParams();

    const {data} = getEmpresa(id)||{data:undefined};
    const navigate = useNavigate();
    
    const [name, setNome] = useState(data?.name);
    const [email, setEmail] = useState(data?.email);
    const [cnpj, setCnpj] = useState(data?.cnpj);
    const [status, setStatus] = useState(data?.status);
    const [telefone, setTelefone] = useState(data?.telefone);

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
    const handleInputCnpj = (event: any) => {
        setCnpj(event.target.value);
    };
    const handleInputStatus = (event: any) => {
        setStatus(event.target.value);
    };
    const handleInputTelefone = (event: any) => {
        setTelefone(event.target.value);
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
            try{res = await postAtualizarEmpresaData({cnpj, name, email, status, telefone, address:{cep, logradouro, bairro, cidade, estado, numero, complemento}});
            }catch(err){
                alert("Erro ao atualizar empresa");
            }
            if(res.status === 200){
                alert("Empresa atualizada com sucesso");
                navigate("/listarempresas");
            }else{
                alert("Erro ao atualizar empresa");}     
    }

    const excluir = async() =>{
        let res:any;
            try{res = await postExcluirEmpresa({cnpj, name, email, status, telefone, address:{cep, logradouro, bairro, cidade, estado, numero, complemento}});
            }catch(err){
                alert("Erro ao excluir empresa");
            }
            if(res.status === 200){
                alert("Empresa excluida com sucesso");
                navigate("/listarempresas");
            }else{
                alert("Erro ao excluir empresa");}  
    }


    return (
        <><html>
        <body className="cadast-body">
            <div className="row">
            <div className="col-md-12">
            <form className="formCad-User">
            <h1 className="cadast-title"> Empresa </h1>
            
            <fieldset className="campos">
              
              <legend><span className="number">1</span> Principais Informações</legend>
            
              <label htmlFor="nome">CNPJ:</label>
              <input type="text" id="name" name="user_nome" value={cnpj} onChange={handleInputCnpj} disabled />  
            
              <label htmlFor="email">Nome:</label>
              <input type="text" id="mail" name="user_email" value={name} onChange={handleInputNome} required/>
           
              <label htmlFor="pass">Telefone:</label>
              <input type="text" id="password"  name="user_pass" value={telefone} onChange={handleInputTelefone} required/>

              <label htmlFor="pass">Email:</label>
              <input type="text" id="password"  name="user_pass" value={email} onChange={handleInputEmail} required/>

              <label htmlFor="pass">Tipo:</label>
              <input type="text" id="password"  name="user_pass" value={status} onChange={handleInputStatus} required/>

            </fieldset>
           
            <form className="formCad-User">          
            <fieldset className="campos">
              
              <legend><span className="number">2</span> Informaações de Endereço: </legend>
            
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
           
            <button type="button" className="btnSubmit" onClick={submit}>Atualizar</button>
            <button type="button" className="btnSubmit" onClick={excluir}>Excluir</button>
            
            </form>
            
            </form>
            </div>
          </div>
        </body>
    </html></>    
    )
}