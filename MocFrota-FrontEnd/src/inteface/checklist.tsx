import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getVeiculoData } from "../hooks/useVeiculoData";
import { Card2 } from "../components/card/card";
import { postStatusData } from "../hooks/useStatusData";

export function checklist() {

    const navigate = useNavigate();
    const{placa:id} = useParams();

    const [placa, setPlaca] = useState(id);
    const [status, setStatus] = useState('');

    const [km, setKm] = useState(0);
    const [combustivel, setCombustivel] = useState(100);
    const [farol, setFarol] = useState(false);
    const [luzFreio, setLuzFreio] = useState(false);
    const [luzRe, setLuzRe] = useState(false);
    const [limpador, setLimpador] = useState(false);
    const [pneu, setPneu] = useState(false);
    const [estepe, setEstepe] = useState(false);
    const [freio, setFreio] = useState(false);

    function handleInputPlaca(event: any) {
        setPlaca(event.target.value);
    }

    function handleInputStatus(event: any) {
        setStatus(event.target.value);
    }

    function handleInputKm(event: any) {
        setKm(event.target.value);
    }

    function handleInputCombustivel(event: any) {
        setCombustivel(event.target.value);
    }

    function handleInputFarol(event: any) {
        setFarol(event.target.value);
    }

    function handleInputLuzFreio(event: any) {
        setLuzFreio(event.target.value);
    }

    function handleInputLuzRe(event: any) {
        setLuzRe(event.target.value);
    }

    function handleInputLimpador(event: any) {
        setLimpador(event.target.value);
    }

    function handleInputPneu(event: any) {
        setPneu(event.target.value);
    }

    function handleInputEstepe(event: any) {
        setEstepe(event.target.value);
    }

    function handleInputFreio(event: any) {
        setFreio(event.target.value);
    }

    const submit = async() =>{
        let res:any;
            try{ res = await postStatusData({placa, status, km, combustivel, farol, luzFreio, luzRe, limpador, pneu, estepe, freio});
            }catch(err){
                alert("Erro ao salvar checklist");
            }
            if(res.status === 200){
                alert("Checklist cadastrada com sucesso");
                navigate("/homeCond");
            }else{
                alert("Erro ao salvar checklist");}     
    }

    return (
        <><html>
        <body className="cadast-body">
            <div className="row">
            <div className="col-md-12">
            <form className="formCad-User">
            <h1 className="cadast-title"> Checklist </h1>
            
            <fieldset className="campos">
              
              <legend><span className="number">1</span> Informações Básicas </legend>
            
              <label htmlFor="nome">Placa:</label>
              <input type="text" id="name" name="user_nome" value={placa} onChange={handleInputPlaca} disabled />  
            
              <label htmlFor="email">Status:</label>
              <input type="text" id="mail" name="user_email" value={status} onChange={handleInputStatus} required/>
           
              <label htmlFor="pass">Kilometragem:</label>
              <input type="number" id="password"  name="user_pass" value={km} onChange={handleInputKm} required/>

              <label htmlFor="pass">Combustivel:</label>
              <input type="number" id="password"  name="user_pass" value={combustivel} onChange={handleInputCombustivel} required/>

            </fieldset>
           
            <form className="formCad-User">          
            <fieldset className="campos">
              
              <legend><span className="number">2</span> Checklist: </legend>
              <p className="textT_checkbox">  Marque as caixas de acordo com o que precisa de reparo </p>

              <label htmlFor="pass" className="text_checkbox">  Farol:   
              <input type="checkbox" id="password"  className="checkbox" value={farol} onChange={handleInputFarol} />
              </label>

              <label htmlFor="cep" className="text_checkbox">  Luz de Freio:    
              <input type="checkbox" id="cep" className="checkbox"  value={luzFreio} onChange={handleInputLuzFreio} />
              </label>

              <label htmlFor="logradouro" className="text_checkbox">  Luz de Re:   
              <input type="checkbox" id="logradouro" className="checkbox"  value={luzRe} onChange={handleInputLuzRe} />    
              </label>

              <label htmlFor="bairro" className="text_checkbox">  Limpador:   
              <input type="checkbox" id="bairro" className="checkbox"  value={limpador} onChange={handleInputLimpador} />
              </label>

              <label htmlFor="cidade" className="text_checkbox">  Pneu:   
              <input type="checkbox" id="cidade" className="checkbox"  value={pneu} onChange={handleInputPneu} />
              </label>

              <label htmlFor="estado" className="text_checkbox">  Estepe:   
              <input type="checkbox" id="estado" className="checkbox"  value={estepe} onChange={handleInputEstepe} />
              </label>

              <label htmlFor="numero" className="text_checkbox">  Freio:   
              <input type="checkbox" id="numero" className="checkbox"  value={freio} onChange={handleInputFreio} />
              </label>

            </fieldset>
           
            <button type="button" className="btnSubmit" onClick={submit}>Salvar</button>
            
            </form>
            
            </form>
            </div>
          </div>
        </body>
    </html></>
    )        
}

export function listarVei(){
    const { data } = getVeiculoData();

    return (
        <div>
            <h2><strong>Veiculos<span></span></strong></h2>
            <div className="card-grip">
                {data?.map(VeiculoData => <Card2 placa={VeiculoData.placa}/>)}
            </div>
        </div>
    )
}

