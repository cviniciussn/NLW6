import illustrationIMG from '../assets/images/illustration.svg'
import logo from '../assets/images/logo.svg'
import logoGoogle from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import { useHistory } from 'react-router-dom'
import { Button } from '../components/Button'
import useAuths from '../hooks/useAuths'


// ACIMA APENAS IMPORTS 


// INICIO DO COMPONENTE \/

export function Home() {

    // Instacia o hook de que auxilia na mudança de páginas
    const history = useHistory()
    const { SigninWithGoogle, user } = useAuths()


    async function handleCreateRoom() {

        if (!user) {
            await SigninWithGoogle()
        }

        history.push('/rooms/new')
    }



    return (

        < div id='page-auth' >
            <aside>
                <img src={illustrationIMG} alt="ilustracao para perguntas e respostas" />
                <strong>Crie salas de Q&amp;A</strong>
                <p>tire dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logo} alt="letmeask" />

                    <button onClick={handleCreateRoom} className='create-room'>
                        <img src={logoGoogle} alt="logue com o Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="digite o código da sala"
                        />
                        <Button type='submit'>
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div >

    )
}