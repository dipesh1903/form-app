import { useEffect, useRef, useState } from "react";
import Container from "../pages/container";
import { useAuth } from "../store/auth/context"
import { getUserDetails } from "../api";
import { UserDetailsStore } from "../store/globalStore";
import { useNavigate } from "react-router-dom";


export const AuthGaurd = () => {

    const authUser = useAuth();
    const isExistingUser = useRef(false)
    const navigate = useNavigate();
    const [showLoader, setShowLoader] = useState<boolean>(true);

    useEffect(() => {
        if (authUser.isFirebaseAuthenticated && authUser.user?.uid ) {
            if (!UserDetailsStore.getUserDetails()) {
                setShowLoader(true);
                getUserDetails(authUser.user.uid).then(res => {
                    if(res) {
                        navigate('/success', {
                            replace: true
                        })
                        UserDetailsStore.setUserDetails(res);
                        isExistingUser.current = true;
                    }
                    else {
                        navigate('/details', {
                            replace: true
                        })
                    }
                }).catch(error => {
                    navigate('/login', {
                        replace: true
                    })
                    console.log('the error is ', error);
                }).finally(() => setShowLoader(false))
            } else {
                setShowLoader(false)
                navigate('/success')
            }
        } else if (authUser && !authUser.isFirebaseAuthenticated) {
            setShowLoader(false)
            navigate('/login', {
                replace: true
            })
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authUser.isFirebaseAuthenticated])

    return <Container showLoader={showLoader}/>
}

