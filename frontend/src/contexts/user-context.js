import  React, {createContext, useState} from 'react';


// export const [user, setUser] = useState(userState);



export const UserContext = createContext();


export const UserProvider = (props) => {
    const { Provider } = UserContext;
    const initialUser ={userObj: null, isLogged: false};
    const [user, setUser] = useState(initialUser);

    return (
        <Provider value={[user, setUser]}>
            {props.children}
        </Provider>
    );

}