import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect } from "react";
import { AuthActionFactory } from "../store/auth/actionCreator";
import { useAuthDispatch } from "../store/auth/context";

export function AuthObserver(props: {children: ReactNode}) {

    const auth = getAuth();
    const dispatch = useAuthDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
              dispatch(AuthActionFactory.signIn(authUser, true));
            } else {
                dispatch(AuthActionFactory.signOut())
            }
          });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>{props.children}</>
    )
}