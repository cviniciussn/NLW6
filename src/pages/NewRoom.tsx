import illustrationIMG from '../assets/images/illustration.svg'
import logo from '../assets/images/logo.svg'

import '../styles/auth.scss'
import '../styles/button.scss'
import { Button } from '../components/Button'


import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './../contexts/AuthContext';


export function NewRoom() {

    const { user } = useContext(AuthContext)


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
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
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