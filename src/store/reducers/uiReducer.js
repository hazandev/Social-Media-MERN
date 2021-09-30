const initialState = {
    toggleLogin: true,
    searchText: '',
    toggleMenuPhone: true
}

export function uiReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'TOGGLE_LOGIN':
            const val = !state.toggleLogin;
            return {...state, toggleLogin: val }
        case 'TOGGLE_MENU_PHONE':
            const stateToggle = !state.toggleMenuPhone;
            return {...state, toggleMenuPhone: stateToggle }
        case 'CLOSE_MENU_PHONE':
            return {...state, toggleMenuPhone: true }
        case 'EDIT_SEARCH':
            return {...state, searchText: action.searchText }
        default:
            return state
    }
}