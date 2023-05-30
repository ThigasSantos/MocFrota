import Card from "../../src/components/card/card";
import { getVeiculo, getVeiculoData, postAtualizarVeiculoData, postExcluirVeiculo } from "../hooks/useVeiculoData";
import { useState } from "react";
import "../../src/components/css/home.css";
import { useNavigate, useParams } from "react-router-dom";


export function listarVeiculo() {
    const { data } = getVeiculoData();

    return (
        <div>
            <h2><strong>Veiculos<span></span></strong></h2>
            <div className="card-grip">
                {data?.map(VeiculoData => <Card placa={VeiculoData.placa}/>)}
            </div>
        </div>
    )
}

export function editarVeiculo() {
    const navigate = useNavigate();
    const{placa:id} = useParams();

    const {data} = getVeiculo(id)||{data:undefined};

    const [placa, setPlaca] = useState(data?.placa);
    const [modelo, setModelo] = useState(data?.modelo);
    const [marca, setMarca] = useState(data?.marca);
    const [cor, setCor] = useState(data?.cor);
    const [ano, setAno] = useState(data?.ano);
    const [chassi, setChassi] = useState(data?.chassi);
    const [renavam, setRenavam] = useState(data?.renavam);
    const [tipo, setTipo] = useState(data?.tipo);

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
      const ret = await postAtualizarVeiculoData({placa, modelo, marca, cor, ano, chassi, renavam, tipo});
      ret.status == 200?navigate("/home"):alert('Erro ao editar veiculo');
     }

    const excluir = async() =>{
        const ret = await postExcluirVeiculo({placa, modelo, marca, cor, ano, chassi, renavam, tipo});
        ret.status == 200?navigate("/home"):alert('Erro ao excluir veiculo');
    }
  
  
      return (
          <><html>
          <body className="cadast-body">
              <div className="row">
              <div className="col-md-12">
              <form action="index.html" method="post" className="formCad-User">
              <h1 className="cadast-title"> Veiculo </h1>
              
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
             
              <button type="submit" className="btnSubmit" onClick={submit}>Salvar</button>
              <button type="submit" className="btnSubmit" onClick={excluir}>Excluir</button>
              
              </form>
              </div>
            </div>
          </body>
      </html></>    
        );
}