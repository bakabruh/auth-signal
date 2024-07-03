import { AuthenticationUser } from "../models/index.model";
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { pipe, tap } from "rxjs";

// Création de l'état initial
export type AuthenticationState = {
    user: AuthenticationUser | null | undefined;
    isLoading: boolean;
}

export type AutenticateType = {
    username: string;
    password: string;
}

// Valeur initiale de l'état
const initialState: AuthenticationState = {
    user: undefined,
    isLoading: false
}

// Reducer pour gérer les actions
export const AuthenticationStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store) => ({
        login: rxMethod<AutenticateType>(
            pipe(
                tap(() => patchState(store, { isLoading: true })),
            )
        )
    }))
)