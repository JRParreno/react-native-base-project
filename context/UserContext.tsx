import React, { createContext, PropsWithChildren, Reducer, useReducer } from "react";
import User from "../models/User";

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const DETAIL = 'DETAIL';

type Action =
    | {
        type: typeof LOGIN; id: string; accessToken: string,
        firstName: string;
        lastName: string;
        emailAddress: string;
    }
    | { type: typeof LOGOUT }
    | { type: typeof DETAIL; firstName: string; lastName: string; emailAddress: string };


const reducer: Reducer<User, Action> = (state: User, action: Action) => {
    switch (action.type) {
        case LOGIN:
            return new User(action.id, action.accessToken, action.firstName, action.lastName, action.emailAddress);
        case LOGOUT:
            return new User();
        default:
            return state;
    }
};

export const UserContext = createContext<{
    id?: string;
    accessToken?: string;
    firstName?: string;
    lastName?: string;
    emailAddress?: string;
    login: (accessToken: string, id: string, firstName: string, lastName: string, emailAddress: string) => void;
    logout: () => void;
}>({
    login: () => {
    },
    logout: () => {
    },
});

interface IProps {
}

export const UserProvider = (props: PropsWithChildren<IProps>) => {
    const [user, userDispatch] = useReducer(reducer, new User());

    const id = user.id;
    const accessToken = user.accessToken;
    const firstName = user.firstName;
    const lastName = user.lastName;
    const emailAddress = user.emailAddress;

    const login = (accessToken: string, id: string, firstName: string, lastName: string, emailAddress: string) => userDispatch({
        type: LOGIN,
        id,
        accessToken,
        firstName,
        lastName,
        emailAddress
    });
    const logout = () => userDispatch({
        type: LOGOUT,
    });
    return (
        <UserContext.Provider
            value={{
                id,
                accessToken,
                firstName,
                lastName,
                emailAddress,
                login,
                logout,
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
};
