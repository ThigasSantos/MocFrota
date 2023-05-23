import './card.css'

interface CardProps{
    title: string,
}

export function Card({title} : CardProps){
    return(
        <div className="card">
            <h2>{title}</h2>
            <p><b>Valor:</b></p>
        </div>
    )
}