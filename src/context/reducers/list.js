const list = (state, { type, payload }) => {
    switch (type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "OPEN_ADD":
            return {
                ...state,
                modalAddIsOpen: true,
                modalDetailIsOpen: false,
                modalUploadIsOpen: false
            }
        case "CLOSE_ADD":
            return {
                ...state,
                modalAddIsOpen: false
            }
        case "OPEN_DETAIL":
            return {
                ...state,
                modalDetailIsOpen: true,
                modalAddIsOpen: false,
                modalUploadIsOpen: false
            }
        case "CLOSE_DETAIL":
            return {
                ...state,
                modalDetailIsOpen: false
            }
        case "OPEN_UP":
            return {
                ...state,
                modalUploadIsOpen: true,
                modalDetailIsOpen: false,
                modalAddIsOpen: false
            }
        case "CLOSE_UP":
            return {
                ...state,
                modalUploadIsOpen: false
            }
        case "LISTS":
            return {
                ...state,
                lists: payload,
                loading: false
            }
        case "REFETCH":
            return {
                ...state,
                refetch: !state.refetch
            }
        case "UPDATE":
            return {
                ...state,
                refetch: !state.refetch,
                listDetail: payload,
                updated: true
            }
        case "ERROR":
            return {
                ...state,
                loading: false,
                error: true
            }
        case "DETAIL":
            return {
                ...state,
                listDetail: payload
            }
        case "DELETE":
            return {
                ...state,
                modalDetailIsOpen: false,
                refetch: !state.refetch
            }
        default:
            return {}
    }
}

export default list;