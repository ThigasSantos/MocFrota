import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function checklist() {

    const navigate = useNavigate();

    const [placa, setPlaca] = useState('');
    const [status, setStatus] = useState('');
    const [km, setKm] = useState('');
    const [combustivel, setCombustivel] = useState('');
    const [farol, setFarol] = useState('');

    const [luzFreio, setLuzFreio] = useState('');
    const [luzRe, setLuzRe] = useState('');
    const [limpador, setLimpador] = useState('');
    const [pneu, setPneu] = useState('');
    const [estepe, setEstepe] = useState('');
    const [freio, setFreio] = useState('');

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
            try{
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
            try{
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

