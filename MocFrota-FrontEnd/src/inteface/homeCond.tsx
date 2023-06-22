import { useState } from 'react';
import '../../src/components/css/home.css'
import { CreateModal2 } from './create-modal';

export function HomeCond(){
const [isModalOpen1, setIsModalOpen] = useState(false);
const [isModalOpen2, setIsModalOpen2] = useState(false);

const handleOpenModal = (id: number) => {
    if(id == 1){
        setIsModalOpen((prev: any) => !prev);
    }else if(id == 2){
        setIsModalOpen2((prev: any) => !prev);
    }
}

    return (
        <><html>
            <div className="wrapper">

<h2><strong>Funções<span>( 3 )</span></strong></h2>

<div className="cards">
    {isModalOpen1 && <CreateModal2 urlCad="/listvei" urlEdit=""/>}
    <button onClick={()=>handleOpenModal(1)}>
        <figure className="card">
        <img src="https://cdn-icons-png.flaticon.com/512/104/104090.png" />
        <figcaption>Realizar CheckList</figcaption>
        </figure>   
    </button>
    
    {isModalOpen2 && <CreateModal2 urlCad="" urlEdit=""/>}
    <button onClick={()=>handleOpenModal(2)}>
        <figure className="card">
        <img src="https://cdn-icons-png.flaticon.com/512/761/761488.png" />
        <figcaption>Registrar Viagem </figcaption>
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

export default HomeCond;