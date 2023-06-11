import { useState } from 'react';
import '../../src/components/css/home.css'
import { CreateModal } from './create-modal';

export function Home(){
const [isModalOpen1, setIsModalOpen] = useState(false);
const [isModalOpen2, setIsModalOpen2] = useState(false);
const [isModalOpen3, setIsModalOpen3] = useState(false);
const handleOpenModal = (id: number) => {
    if(id == 1){
        setIsModalOpen((prev: any) => !prev);
    }else if(id == 2){
        setIsModalOpen2((prev: any) => !prev);
    }else if(id == 3){
        setIsModalOpen3((prev: any) => !prev);
    }
}

    return (
        <><html>
            <div className="wrapper">

<h2><strong>Funções<span>( 3 )</span></strong></h2>

<div className="cards">
    {isModalOpen1 && <CreateModal urlCad="/cadastroveiculo" urlEdit="/listarveiculo"/>}
    <button onClick={()=>handleOpenModal(1)}>

        <figure className="card">
        <img src="https://cdn-icons-png.flaticon.com/512/55/55268.png" />
        <figcaption>Menu Veiculo</figcaption>
        </figure>
        
    </button>
    
    {isModalOpen2 && <CreateModal urlCad="/cadastrousuario" urlEdit="/listarusers"/>}
    <button onClick={()=>handleOpenModal(2)}>

        <figure className="card">
        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" />
        <figcaption>Menu Usuario</figcaption>
        </figure>

    </button>

    {isModalOpen3 && <CreateModal urlCad="" urlEdit=""/>}
    <button onClick={()=>handleOpenModal(3)}>
        <figure className="card">
        <img src="https://i.pinimg.com/originals/6b/7f/48/6b7f48367fd42e6cbc05e3637cbbeba3.png" />
        <figcaption>Menu Empresas</figcaption>
        </figure>
    </button>
    

</div>

<h2><strong>Novidades ?</strong></h2>

<div className="news">

    <figure className="article">
            <h3>Update</h3>

            <p>
               Nas proximas semanas teremos novidades, aguardem ! Funções novas e melhorias no sistema.
            </p>
    </figure>

</div>

</div>
        </html></>
        )
}

export default Home;