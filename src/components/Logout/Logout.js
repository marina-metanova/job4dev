import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";

export const Logout = () => {
    const nav = useNavigate();
    const {user, userLogout} = useContext(AuthContext);

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(res => {
                userLogout();
                nav('/');
            })
            .catch(() => {
                nav('/404');
            });
    }, [])

    return null;
}