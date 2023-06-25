import { Link } from "react-router-dom";
import '../../src/components/css/modal.css'

interface CreateModalProps {
    urlCad: string;
    urlEdit: string;
}

export function CreateModal({urlCad, urlEdit} : CreateModalProps) {
    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Escolha uma opção</h2>
                <Link to={urlCad}>Criar novo</Link>
                <span></span>
                <Link to={urlEdit}>Editar/Excluir</Link>
            </div>
        </div>
    )
}

export function CreateModal2({urlCad} : CreateModalProps) {
    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Escolha uma opção</h2>
                <Link to={urlCad}>Criar novo</Link>
                <span></span>
            </div>
        </div>
    )
}

export function CreateModal3({urlCad, urlEdit} : CreateModalProps) {
    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Escolha uma opção</h2>
                <Link to={urlCad}>Aprovar CheckList</Link>
                <Link to={urlEdit}>Solicitar Manutenção</Link>
                <span></span>
            </div>
        </div>
    )
}