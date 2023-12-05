import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import { listar } from "../services/listar";

export function Registros() {

    useEffect(() => {
        console.log(listar());
      }, []);

    return (
        <div id="main-registros">
            <h1>Registros anteriores</h1>

            <Link id="link-to-home" to={"/"}>voltar a tela inicial</Link>
        </div>
    )
}