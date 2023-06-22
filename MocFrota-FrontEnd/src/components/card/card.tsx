import { useNavigate } from 'react-router-dom';
import './card.css'

interface CardProps{
    placa: string
}

export function Card({placa} : CardProps){
    const navigate = useNavigate();

    const submit = async({placa}: CardProps) =>{
        navigate('/editarveiculo/'+placa);
    }

    return(
        <button className="buttonPlaca" onClick={()=>submit({placa})}>
            <div className="gfc-license-plate">
                <div className='header'>BRASIL</div>
                <div className='content'>{placa}</div>       
            </div>
        </button>
    )
}

export function Card2({placa} : CardProps){
    const navigate = useNavigate();

    const submit = async({placa}: CardProps) =>{
        navigate('/checklist/'+placa);
    }

    return(
        <button className="buttonPlaca" onClick={()=>submit({placa})}>
            <div className="gfc-license-plate">
                <div className='header'>BRASIL</div>
                <div className='content'>{placa}</div>       
            </div>
        </button>
    )
}