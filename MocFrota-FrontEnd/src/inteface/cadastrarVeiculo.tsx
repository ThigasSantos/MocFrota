import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/components/css/cadastrarUser.css"
import { postVeiculoData } from "../hooks/useVeiculoData";


export function cadastrarVeiculo() {

  const navigate = useNavigate();

  const [placa, setPlaca] = useState(null);
  const [modelo, setModelo] = useState(null);
  const [marca, setMarca] = useState('');
  const [cor, setCor] = useState('');
  const [ano, setAno] = useState(0);
  const [chassi, setChassi] = useState('');
  const [renavam, setRenavam] = useState(null);
  const [tipo, setTipo] = useState('');

  const handleInputPlaca = (event: any) => {
    setPlaca(event.target.value);
  };
  const handleInputModelo = (event: any) => {
    setModelo(event.target.value);
  };
  const handleInputMarca = (event: any) => {
    setMarca(event.target.value);
  };
  const handleInputCor = (event: any) => {
    setCor(event.target.value);
  };
  const handleInputAno = (event: any) => {
    setAno(event.target.value);
  };
  const handleInputChassi = (event: any) => {
    setChassi(event.target.value);
  };
  const handleInputRenavam = (event: any) => {
    setRenavam(event.target.value);
  };
  const handleInputTipo = (event: any) => {
    setTipo(event.target.value);
  };

  const submit = async() =>{
    const ret = await postVeiculoData({placa, modelo, marca, cor, ano, chassi, renavam, tipo});
    ret.status == 200?navigate("/home"):alert('Erro ao cadastrar veiculo');
   }


    return (
        <><html>
        <body className="cadast-body">
            <div className="row">
            <div className="col-md-12">
            <form action="index.html" method="post" className="formCad-User">
            <h1 className="cadast-title"> Cadastro de Veiculo </h1>
            
            <fieldset className="campos">
              
              <legend><span className="number">1</span> Informações Basicas</legend>
            
              <label htmlFor="placa">Placa:</label>
              <input type="text" id="name" name="vei_placa" value={placa} onChange={handleInputPlaca} required />  
            
              <label htmlFor="modelo">Modelo:</label>
              <input type="text" id="mail" name="vei_modelo" value={modelo} onChange={handleInputModelo} required/>
           
              <label htmlFor="marca">Marca:</label>
              <input type="text" id="password"  name="vei_marca" value={marca} onChange={handleInputMarca} required/>
            
              <label htmlFor="cor">Cor:</label>
              <input type="text" id="cor" name="vei_cor" value={cor} onChange={handleInputCor}/>

              <label htmlFor="ano">Ano:</label>
              <input type="number" id="ano" name="vei_ano" value={ano} onChange={handleInputAno}/>

              <label htmlFor="chassi">Chassi:</label>
              <input type="text" id="chassi" name="vei_chassi" value={chassi} onChange={handleInputChassi}/>

              <label htmlFor="renavam">Renavam:</label>
              <input type="text" id="renavam" name="vei_renavam" value={renavam} onChange={handleInputRenavam} required/>

              <label htmlFor="tipo">Tipo:</label>
              <select id="tipo" name="vei_tipo" value={tipo} onChange={handleInputTipo}>
                  <option value="">   </option>

                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Moto">Moto</option>
                  <option value="Carretinha">Carretinha</option>
                  <option value="Caminhao Bau">Caminhão Báu</option>
                  <option value="Caminhao Truck">Caminhão Truck</option>
              </select> 
            </fieldset>
           
            <button type="submit" className="btnSubmit" onClick={submit}>Cadastrar</button>
            
            </form>
            </div>
          </div>
        </body>
    </html></>    
    )
}

export default cadastrarVeiculo;