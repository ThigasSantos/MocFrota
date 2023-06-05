import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/components/css/cadastrarUser.css"
import { postCondutorData, postGerenteData } from "../hooks/useUserData";


interface UserModalProps {
    role: string;
}


export function UserModal({role} : UserModalProps) {

  const navigate = useNavigate();

  const [cpf, setCPF] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cnh, setCnh] = useState('');

    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');


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
        if(role == "Condutor"){
            const ret = await postCondutorData({cnh, cpf, telefone,adress:{cep, logradouro, bairro, cidade, estado, numero, complemento}});
            ret.status == 200?navigate("/home"):alert('Erro ao cadastrar condutor');
        }
        else{
            const ret = await postGerenteData({cpf, telefone,adress:{cep, logradouro, bairro, cidade, estado, numero, complemento}});
            ret.status == 200?navigate("/home"):alert('Erro ao cadastrar gerente');
        }
    }
    return (
        <>
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
    </>    
    )
}

export default UserModal;