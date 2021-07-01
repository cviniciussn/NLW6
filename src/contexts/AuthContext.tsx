import { useState } from "react"
import { useEffect } from "react"
import { createContext, ReactNode } from "react"
import { auth, firebase } from '../services/firebase'


type User = {
    id: string;
    name: string;
    avatar: string;
}

type AuthContextType = {
    user: User | undefined;
    SigninWithGoogle: () => Promise<void>;

}

export const AuthContext = createContext({} as AuthContextType)


type AuthContextProviderProps = {
    children: ReactNode,

}


export function AuthContextProvider(props: AuthContextProviderProps) {

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, photoURL, uid } = user

                if (!displayName || !photoURL) {
                    throw new Error('Missing information from Google Account')
                }

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL,
                })
            }
        })
        return () => { unsubscribe() }

    }, [])

    const [user, setUser] = useState<User>()
    async function SigninWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        const result = await auth.signInWithPopup(provider);

        if (result.user) {
            const { displayName, photoURL, uid } = result.user

            if (!displayName || !photoURL) {
                throw new Error('Missing information from Google Account')
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL,
            })
        }

    }
    return (

        <AuthContext.Provider value={{ user, SigninWithGoogle }}>

            {props.children}

        </AuthContext.Provider>

    )
}