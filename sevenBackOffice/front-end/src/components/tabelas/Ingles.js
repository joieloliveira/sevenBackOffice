import React, { useContext, useRef, useEffect, useState  } from 'react';
import "./style.css";

import { Context } from '../../Context/AuthContext';

import Input from '../../components/input/Input';

export default function Ingles(props) {
    
    const ingles = useRef(null);

    const { abaAtiva } = useContext(Context);

    const [editar, setEditar] = useState(false);

    const Aba = () => {
        if (abaAtiva == "ingles") {
            //document.getElementsByClassName('tecnica')[0].style.backgroundColor = "#c2ff47";
            ingles.current.style.display  = "flex";
        } else {
            //document.getElementsByClassName('tecnica')[0].style.backgroundColor = "#c2ff47";
            ingles.current.style.display  = "none";
        }
    }

    useEffect(() => {
        Aba();
    }, [abaAtiva]);

    return (
        <div className='tableBox ingles' ref={ingles}>
            <div className='ButtonsBox'>
                <button>Importar dados</button>
                <button>Filtrar</button>
                <button>Ordenar</button>
                <button>Excluir lista</button>
                <button type='button' onClick={() => setEditar(!editar)} >Editar lista</button>
            </div>
            <table border="1" className='TableBody'>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Nota geral</th>
                    <th>Reading</th>
                    <th>Writing</th>
                    <th>Listening</th>
                    <th>Speaking</th>
                    <th>Data</th>
                </tr>
                <tr>
                    <td style={{textAlign: "center"}}>01</td>
                    <td className='tableNameUser'>Maria Ingles</td>
                    <td>{editar ? <Input /> : "120"}</td>
                    <td>{editar ? <Input /> : "120"}</td>
                    <td>{editar ? <Input /> : "120"}</td>
                    <td>{editar ? <Input /> : "120"}</td>
                    <td>{editar ? <Input /> : "120"}</td>
                    <td>{editar ? <Input /> : "120"}</td>
                </tr>
                <tr>
                    <td style={{textAlign: "center"}}>02</td>
                    <td className='tableNameUser'>Francisco Chang</td>
                    <td>{editar ? <Input /> : "120"}</td>
                    <td>{editar ? <Input /> : "120"}</td>
                    <td>{editar ? <Input /> : "120"}</td>
                    <td>{editar ? <Input /> : "120"}</td>
                    <td>{editar ? <Input /> : "120"}</td>
                    <td>{editar ? <Input /> : "120"}</td>
                </tr>
                
            </table>
        </div>
    );
}

//const [show, setShow] = useState(false);
//<Toast onClose={() => setShow(false)} show={show} delay={4000} autohide>Altera????es salvas</Toast>