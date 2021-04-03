import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import firebase from '../../config/firebase';

import './home.css'

import Navbar from '../../components/navbar'
import EventoCard from '../../components/evento-card'

function Home({ match }) {

    const [eventos, setEventos] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    const usuarioEmail = useSelector(state => state.usuarioEmail);
    let listaeventos = [];

    useEffect(() => {
        if (match.params.parametro) {
            firebase.firestore().collection('eventos').where('usuario', '==', usuarioEmail).get().then(async (resultado) => {
                await resultado.docs.forEach(doc => {
                    if (doc.data().titulo.indexOf(pesquisa) >= 0) {
                        listaeventos.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    }
                })

                setEventos(listaeventos);
            });

        } else {
            firebase.firestore().collection('eventos').get().then(async (resultado) => {
                await resultado.docs.forEach(doc => {
                    if (doc.data().titulo.indexOf(pesquisa) >= 0) {
                        listaeventos.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    }
                })
                setEventos(listaeventos);
            })
        }
    })

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row p-3 ">
                    <h2 className="p-5">Eventos Publicados</h2>
                    <input onChange={(e) => setPesquisa(e.target.value)} type="text" className="form-control text-center" placeholder="Pesquisar evento pelo título..." />
                </div>

                <div className="row p-4">
                    {eventos.map(item => <EventoCard key={item.id} id={item.id} img={item.foto} titulo={item.titulo} detalhes={item.detalhes} visualizacoes={item.visualizacoes} />)}
                </div>
            </div>
        </>
    )
}

export default Home