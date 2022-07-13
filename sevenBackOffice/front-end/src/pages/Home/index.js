import React, { useContext } from "react";
import "./style.css";

import { Tab } from 'react-bootstrap';

import SideBar from "../../components/sidebar/SideBar";
import TopNavBar from "../../components/topNavBar/TopNavBar";
import Fisica from "../../components/tabelas/Fisica";
import Academico from "../../components/tabelas/Academico";
import Ingles from "../../components/tabelas/Ingles";
import Tecnica from "../../components/tabelas/Tecnica";
import Treinos from "../../components/tabelas/Treinos";

import { Context } from '../../Context/AuthContext';

export const Home = () => {

    const { sidebarIsOpen } = useContext(Context);

    return (
        <div style={{ display: "flex", width: "100%" }}>
            <SideBar isOpen={sidebarIsOpen} />

            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <TopNavBar/>
                <Fisica/>
                <Academico/>
                <Ingles/>
                <Tecnica/>
                <Treinos/>
            </div>

        </div>
    );
};

export default Home;
