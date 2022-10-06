import { Auth_DATA, Auth_ERROR, Auth_LOADING, Auth_LogOut } from "./actionType"



export const authLoading = () => {
    return {

        type: Auth_LOADING
    };

}

export const authLogout = () => {
    return {

        type: Auth_LogOut
    };

}



export const authError = () => {
    return {

        type: Auth_ERROR
    };
}

export const authData = (payload) => {
    return {

        type: Auth_DATA,
        payload
    }
}
