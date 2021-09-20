const initialState = {
    toggleLogin: true,
    searchText: ''
}

export function uiReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'TOGGLE_LOGIN':
            const val = !state.toggleLogin;
            return { ...state, toggleLogin: val }
        case 'EDIT_SEARCH':
            return { ...state, searchText: action.searchText }
        default:
            return state
    }
}
