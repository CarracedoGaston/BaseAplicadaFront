import React from 'react'
import '../../App.css'
import './style.css'
import { Link } from "react-router-dom"

function Nav () {
  return (
    <ul>
      <Link to="/escribano" className="link">
        <li>Escribanos</li>
      </Link>
      <Link to="/cliente" className="link">
        <li>Clientes</li>
      </Link>
      <Link to="/localidad" className="link">
        <li>Localidades</li>
      </Link>
      <Link to="/escritura" className="link">
        <li>Escrituras</li>
      </Link>
    </ul>
  )
}

export default Nav