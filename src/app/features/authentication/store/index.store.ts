import { AuthenticationUser } from "../models/index.model";
import { signalStore, withState } from "@ngrx/signals";

// Création de l'état initial

export type AuthenticationState = {
    user: AuthenticationUser | null | undefined;
    isLoading: boolean;
}

// Valeur initiale de l'état

const initialState: AuthenticationState = {
    user: undefined,
    isLoading: false
}

// Reducer pour gérer les actions

export const AuthenticationStore = signalStore(
    { providedIn: 'root' },
    withState(initialState)
)