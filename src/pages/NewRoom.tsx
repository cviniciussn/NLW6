import illustrationIMG from '../assets/images/illustration.svg'
import logo from '../assets/images/logo.svg'

import '../styles/auth.scss'
import '../styles/button.scss'
import { Button } from '../components/Button'


import { Link, useHistory } from 'react-router-dom'
import { useContext, FormEvent } from 'react'
import { AuthContext } from './../contexts/AuthContext';
import { useState } from 'react'
import { database } from '../services/firebase'


export function NewRoom() {

    const { user } = useContext(AuthContext)
    const history = useHistory()

    const [newRoom, setNewRoom] = useState('')

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if (newRoom.trim() === '') {
            return
        }



        const roomRef = database.ref('rooms')
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorID: user?.id,
        })

        history.push(` /rooms/${firebaseRoom.key}`)
    }


    return (
        <div id='page-auth'>
            <aside>
                <img src={illustrationIMG} alt="ilustracao para perguntas e respostas" />
                <strong>Crie salas de Q&amp;A</strong>
                <p>tire dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logo} alt="letmeask" />
                    <h1>Bem vindo, {user?.name}!</h1>

                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type='submit'>
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/"> clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>

    )
}