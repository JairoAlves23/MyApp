import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './App.css'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Footer from '../components/Footer'

const App = props => {
    return(
        <div className="App">
          <Logo></Logo>  
          <Header></Header>  
          <Nav></Nav>  
          <Main></Main>  
          <Footer></Footer>  
        </div>
    )
}

export default App