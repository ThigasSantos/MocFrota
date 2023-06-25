import { useNavigate } from 'react-router-dom';
import './list.css'

interface ListProps{
    name: string
    cpf: string
    role: string
}

interface CpfProps{
    cpf: string
}

interface ListPropsV{
    cnpj: string
    name: string
    telefone: string
    status: string
}

interface CnpjProps{
    cnpj: string
}

interface ListPropsC{
    id: number
    placa: string
    data: string
    status: string
}

interface IdProps{ 
    id: number
}

export function ListU({name, cpf, role} : ListProps){
    const navigate = useNavigate();

    const submit = async({cpf}: CpfProps) =>{
        navigate('/editaruser/'+cpf);
    }

    return(
        <div className="border"> 
        <button className="buttonUser" onClick={()=>submit({cpf})}>
            <div className='header'>{role.toUpperCase()}</div>
            <div className="list-users">
                <div className='content'>Nome: {name}  CPF: {cpf}</div>       
            </div>
        </button>
        </div>
    )
}

export function ListV({cnpj, name, telefone, status} : ListPropsV){
    const navigate = useNavigate();

    const submit = async({cnpj}: CnpjProps) =>{
        navigate('/editarempresa/'+cnpj);
    }

    return( <div className="border"> 
    <button className="buttonUser" onClick={()=>submit({cnpj})}>
        <div className='header'>{status.toUpperCase()}</div>
        <div className="list-users">
            <div className='content'>Nome: {name}  Telefone: {telefone}</div>       
        </div>
    </button>
    </div>  )  
}

export function ListCheck({id, placa, data, status} : ListPropsC){

    const navigate = useNavigate();
    
    const submit = async({id}: IdProps) =>{
        navigate('/updatechecklist/'+id);
    }

    return(<div className="border"> 
    <button className="buttonUser" onClick={()=>submit({id})}>
        <div className='header'>{id}</div>
        <div className="list-users">
            <div className='content'>Veiculo: {placa}  Data: {data}</div>       
        </div>
    </button>
    </div> )
}