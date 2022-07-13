import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import logo7 from '../../img/img/Logo_SevenAcademy-061.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <img src={logo7} alt="logo7" />
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink to={"#"}>
            Meu perfil
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"#"}>
            Atletas
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"#"}>
            Treinadores
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"#"}>
            Turmas
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"#"}>
            Dados
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

export default SideBar;
