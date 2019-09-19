import React from 'react'

import './Logo.css'
import logo from '../assets/imgs/logo.png'

const Logo = props => {
    return(
        <aside className="logo">
           <img src={logo} alt="logo" />
        </aside>
    )
}

export default Logo