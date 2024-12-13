import { useEffect, useRef, useState } from "react";
import { Pages } from "../constant";
import Container from "../pages/container";
import { useAuth } from "../store/auth/context"
import { getUserDetails } from "../api";
import { UserDetailsStore } from "../store/globalStore";


export const AuthGaurd = () => {

    const authUser = useAuth();
    const [page, setPage] = useState<Pages>(Pages.LOADER);
    const isExistingUser = useRef(false)

    useEffect(() =>  {
        isExistingUser.current = false;
        if (authUser.isFirebaseAuthenticated && authUser.user?.uid) {
            getUserDetails(authUser.user.uid).then(res => {
                if(res) {
                    setPage(Pages.EXISITNG_USER_PAGE)
                    UserDetailsStore.setUserDetails(res);
                    isExistingUser.current = true;
                }
                else {
                    setPage(Pages.USER_DETAILS_PAGE)
                }
            }).catch(error => {
                console.log('the error is ', error);
                setPage(Pages.LOGIN_PAGE);
            })
        } else if (authUser && !authUser.isFirebaseAuthenticated) {
            setPage(Pages.LOADER)
        } else {
            setTimeout(() => setPage(Pages.LOGIN_PAGE), 500)
        }
     
    }, [authUser])

    return <Container currPage={page} isExistingUser={isExistingUser.current}/>;
}

