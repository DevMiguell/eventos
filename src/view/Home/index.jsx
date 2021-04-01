import { useState } from 'react'
import { Link } from 'react-router-dom'

import 'firebase/auth'

import './home.css'
import Navbar from '../../components/navbar'

function Home() {
    return (
        <>
            <Navbar />
            <h1>Pagina Inicial</h1>
        </>
    )
}

export default Home