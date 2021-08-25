const initialState = {
    toggleLogin: true
}

export function uiReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'TOGGLE_LOGIN':
            const val = !state.toggleLogin;
            return { ...state, toggleLogin: val }
        default:
            return state
    }
}
