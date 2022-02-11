const auth = (state, { type, payload }) => {
    switch (type) {
        case "LOGIN":
            return {
                ...state,
                isLoggedIn: true,
            }
        case "LOGOUT":
            return {
                ...state,
                isLoggedIn: false,
                token: {}
            }
        case "SET_USER":
            return {
                ...state,
                userData: payload.userData,
                token: payload.token,
                isLoggedIn: true
            }
        default:
            return state;
    }
}

export default auth;