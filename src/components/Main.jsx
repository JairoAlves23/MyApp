import React, { useState, useEffect } from 'react'

import firebase from '../config/firebase'

const Main = props => {

    const [name,SetName] = useState('')
    /* useEffect(()=>{
       firebase.database().ref('usuarios').child('usuarios')
    },[]) */

    console.log(name)

    const changeName = (e) => {
        SetName(e.target.value)
    }

    const addDescrition = name => {
        /* firebase.database().ref('usuarios').push({name})   
        SetName('') */
        firebase.post('/contacts.json', {name})
    }

    return(
        <main className="main">
            <input value={name} onChange={(e)=>changeName(e)}></input>
            <button  onClick={()=>addDescrition(name)}>Enviar</button>
        </main>
    )
}

export default Main