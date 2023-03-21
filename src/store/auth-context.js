import React, { useState } from 'react'

const Authcontext = React.createContext({
    token: '',
    isLoggedIn: false,
    Login: (token) => {},
    logout: () => {}
})

export const AuthcontextProvider = (props) => {
    const [token, SetToken] = useState(null)

    const userLoggedIn = !!token;//it convert true/false to boolean value

    const LoginHandler = (token) => {
        SetToken(token)
    }

    const LogoutHandler = () => {
        SetToken(null)
    }
    const contextValue = {
        token: token,
        isLoggedIn: userLoggedIn,
        Login: LoginHandler,
        logout: LogoutHandler
    }

    return <Authcontext.Provider value={contextValue}>
        {props.children}
    </Authcontext.Provider>
}

export default Authcontext
