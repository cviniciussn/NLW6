import { AuthContext } from "../contexts/AuthContext";
import { useContext } from 'react';

export default () => {
    const value = useContext(AuthContext)
    return value
}