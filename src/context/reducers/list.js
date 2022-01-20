const list = (state, { type, payload }) => {
    switch (type) {
        case "OPEN_ADD":
            return {
                ...state,
                modalAddIsOpen: true
            }
        case "CLOSE_ADD":
            return {
                ...state,
                modalAddIsOpen: false
            }
        case "OPEN_UP":
            return {
                ...state,
                modalUploadIsOpen: true
            }
        case "CLOSE_UP":
            return {
                ...state,
                modalUploadIsOpen: false
            }

    }
}

export default list;