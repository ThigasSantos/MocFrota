import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStatus, getStatusAlter, getStatusData, postStatusData, postUpdateStatusData } from "../hooks/useStatusData";
import { ListCheck } from "../components/list/list";

export function aprovarChecklist() {

    const navigate = useNavigate();
    const{id} = useParams();
    const {data} = getStatusAlter(id)||{data:undefined};

    const [placa, setPlaca] = useState(data?.placa);
    const [status, setStatus] = useState(data?.status);
    const [estado, setEstado] = useState(data?.estado);

    const [km, setKm] = useState(data?.km);
    const [combustivel, setCombustivel] = useState(data?.combustivel);
    const [farol, setFarol] = useState(data?.farol);
    const [luzFreio, setLuzFreio] = useState(data?.luzFreio);
    const [luzRe, setLuzRe] = useState(data?.luzRe);
    const [limpador, setLimpador] = useState(data?.limpador);
    const [pneu, setPneu] = useState(data?.pneu);
    const [estepe, setEstepe] = useState(data?.estepe);
    const [freio, setFreio] = useState(data?.freio);

    function handleInputPlaca(event: any) {
        setPlaca(event.target.value);
    }

    function handleInputStatus(event: any) {
        setStatus(event.target.value);
    }

    function handleInputEstado(event: any) {
        setEstado(event.target.value);
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
            try{ res = await postUpdateStatusData({id:data?.id, placa, status:"Fechado", estado, km, combustivel, farol, luzFreio, luzRe, limpador, pneu, estepe, freio});
            }catch(err){
                alert("Erro ao salvar checklist");
            }
            if(res.status === 200){
                alert("Checklist aprovada com sucesso");
                navigate("/listchecklist");
            }else{
                alert("Erro ao aprovar checklist");}     
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

              <label htmlFor="nome">Status:</label>
              <input type="text" id="name" name="user_nome" value={status} onChange={handleInputStatus} disabled />  
            
              <label htmlFor="tipo">Tipo de CheckList:</label>
              <select id="tipo" name="vei_tipo" value={estado} onChange={handleInputEstado}>
                  <option value="">   </option>
                  <option value="Ida">Saida até o Destido</option>
                  <option value="Chegada">Chegada no Destino</option>
              </select> 
           
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
           
            <button type="button" className="btnSubmit" onClick={submit}>Encerrar CheckList</button>
            <button type="button" className="btnSubmit" onClick={submit}>Abrir Manutenção</button>
            
            </form>
            
            </form>
            </div>
          </div>
        </body>
    </html></>
    )        
}

export function listarCheckList(){
    const { data } = getStatusData();

    return (
        <div>
            <h2><strong>CheckLists<span></span></strong></h2>
            <div className="title-checklist">
                <h2><strong>Em aberto<span></span></strong></h2>
                    <div className="card-grip">
                    { 
                    data?.map(StatusDataAll => {
                        // Verificar o valor da propriedade "status"
                        if (StatusDataAll.status === "Aberto") {
                        // Redirecionar para a página adequada com base no valor de "status"
                        console.log(StatusDataAll.id);
                        
                    return (
                    <ListCheck id={StatusDataAll.id} placa={StatusDataAll.placa} data={StatusDataAll.data} status={StatusDataAll.status}/>);
                    }return null; // Não renderizar se o "status" não for "Aberto"
                    })}
                    </div>
                <h2><strong>Encerrado<span></span></strong></h2>
                    <div className="card-grip">
                    { 
                    data?.map(StatusDataAll => {
                        // Verificar o valor da propriedade "status"
                        if (StatusDataAll.status === "Fechado") {
                        // Redirecionar para a página adequada com base no valor de "status"
                    return (
                    <ListCheck id={StatusDataAll.id} placa={StatusDataAll.placa} data={StatusDataAll.data} status={StatusDataAll.status}/>);
                    }return null; // Não renderizar se o "status" não for "Fechado"
                    })}
                    </div>
                <h2><strong>Em Manutenção<span></span></strong></h2>
                    <div className="card-grip">
                    { 
                    data?.map(StatusDataAll => {
                        // Verificar o valor da propriedade "status"
                        if (StatusDataAll.status === "Maintence") {
                        // Redirecionar para a página adequada com base no valor de "status"
                    return (
                    <ListCheck id={StatusDataAll.id} placa={StatusDataAll.placa} data={StatusDataAll.data} status={StatusDataAll.status}/>);
                    }return null; // Não renderizar se o "status" não for "Maintance"
                    })}
                    </div>   
            </div>
            
        </div>
    )
}
