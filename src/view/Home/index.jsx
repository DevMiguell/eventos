import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import firebase from '../../config/firebase';

import './home.css'

import Navbar from '../../components/navbar'
import EventoCard from '../../components/evento-card'

function Home() {

    const [eventos, setEventos] = useState([]);
    let listaeventos = [];

    useEffect(() => {
        firebase.firestore().collection('eventos').get().then(async (resultado) => {
            await resultado.docs.forEach(doc => {
                listaeventos.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setEventos(listaeventos);
        })
    })

    return (
        <>
            <Navbar />
            <h1>{useSelector(state => state.usuarioEmail)}</h1>
            <h1>Logado: {useSelector(state => state.usuarioLogado)}</h1>

            <div className="row p-3">
                {eventos.map(item => <EventoCard key={item.id} id={item.id} img={item.foto} titulo={item.titulo} detalhes={item.detalhes} visualizacoes={item.visualizacoes} />)}
            </div>
        </>
    )
}

export default Home