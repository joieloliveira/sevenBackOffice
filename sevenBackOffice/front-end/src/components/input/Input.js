import React, { useContext, useRef, useEffect } from 'react';
import "./style.css";

export default function Input() {

    return (
        <>
          <input className='inputCuston'/>
        </>
    );
}

//const [show, setShow] = useState(false);
//<Toast onClose={() => setShow(false)} show={show} delay={4000} autohide>Alterações salvas</Toast>