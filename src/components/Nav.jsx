import React from 'react'

import './Nav.css'

const Nav = props => {
    return(
        <aside className="nav">
          <i className="fa fa-home"> Inicio</i> 
          <i className="fa fa-users"> Usuarios</i> 
        </aside>
    )
}

export default Nav