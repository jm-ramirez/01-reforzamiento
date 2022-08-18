import { useEffect, useReducer } from "react";

interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    name: string
}

const initialState = {
    validando: true,
    token: null,
    username: '',
    name: ''
}

type LoginPayload = {
    username: string;
    name: string;
}

type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                name: '',
                username: ''
            }

        case 'login':
            const { name, username } = action.payload
            return {
                validando: false,
                token: "ABC123",
                name: name,
                username: username
            }
        default:
            return state;
    }
}

export const Login = () => {
    const [{ validando, token, name }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' });
        }, 1500);
    }, []);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                name: 'Juan Manuel',
                username: 'jmr90'
            }
        })
    };

    const logout = () => {
        dispatch({ type: 'logout' })
    };

    if (validando) {
        return (<>
            <h3>Login</h3>

            <div className="alert alert-info">
                Validando...
            </div>
        </>)
    }

    return (
        <>
            <h3>Login</h3>

            {
                (token)
                    ?
                    <>
                        <div className="alert alert-success">Autenticado como: {name}</div>
                        <button className="btn btn-danger" onClick={logout}>Logout</button>
                    </>
                    :
                    <>
                        <div className="alert alert-danger">No autenticado</div>
                        <button className="btn btn-primary" onClick={login}>Login</button>
                    </>
            }
        </>
    )
}
