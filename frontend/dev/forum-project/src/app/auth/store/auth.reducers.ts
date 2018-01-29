import * as AuthActions from './auth.actions';

export interface State {
    token: string;
    authenticated: boolean
}

const  InitialState: State = {
    token: null,
    authenticated: false
}

export function authReducer (state = InitialState, action: AuthActions.AuthActions) {

    switch (action.type) {
        case (AuthActions.SIGNUP):
        case (AuthActions.SIGNIN):
            return {
                ...state, 
                authenticated: true
            };
        case (AuthActions.LOGOUT):
            return {
                ...state,
                token: null,
                authenticated: false
            };
        default: 
            return state;
    }
}