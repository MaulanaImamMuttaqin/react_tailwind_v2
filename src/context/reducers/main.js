const main = (state, { type, payload }) => {
    switch (type) {
        case "TOGGLE":
            return {
                ...state,
                sideBarIsOpen: !state.sideBarIsOpen
            }

    }
}

export default main;