import React, { useContext, useRef, useEffect, useState } from 'react';
import "./style.css";

import { Context } from '../../Context/AuthContext';

import Input from '../../components/input/Input';

import { useDispatch, useSelector } from "react-redux";
import { getDataUserRequest, deleteDataUserRequest } from "../../redux";

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();

export default function Academico(props) {

    const dispatch = useAppDispatch();
    const userData = useAppSelector(state => state.userData)

    const Getdata = () => {
        dispatch(getDataUserRequest())
    }

    const academico = useRef(null);

    const { abaAtiva } = useContext(Context);

    const [editar, setEditar] = useState(false);

    const Aba = () => {
        if (abaAtiva == "academico") {
            //document.getElementsByClassName('tecnica')[0].style.backgroundColor = "#c2ff47";
            academico.current.style.display = "flex";
        } else {
            //document.getElementsByClassName('tecnica')[0].style.backgroundColor = "#c2ff47";
            academico.current.style.display = "none";
        }
    }

    console.log(userData);

    useEffect(() => {
        Getdata();
    }, []);

    useEffect(() => {
        Aba();
    }, [abaAtiva]);

    return (
        <div className='tableBox academico' ref={academico}>
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
                    <th>GPA/trimesetre</th>
                    <th>GPA (ano) acumulativo</th>
                    <th>GPA (EM) acumulativo</th>
                </tr>
                <tr>
                    {userData.usersData.map(datos => (
                        <>
                            <td>{datos._id}</td>
                            <td className='tableNameUser'>{datos.name}</td>
                            <td>{editar ? <Input /> : datos.gpa_trimestre}</td>
                            <td>{editar ? <Input /> : datos.gpa_ano_acumulativo}</td>
                            <td>{editar ? <Input /> : datos.gpa_em_acumulativo}</td>
                        </>
                    ))}
                </tr>

            </table>
        </div>
    );
}

//const [show, setShow] = useState(false);
//<Toast onClose={() => setShow(false)} show={show} delay={4000} autohide>Alterações salvas</Toast>