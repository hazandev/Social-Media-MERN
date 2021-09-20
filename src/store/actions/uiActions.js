export function editSearch(searchText) {
    return async dispatch => {
        try {
            dispatch({ type: 'EDIT_SEARCH', searchText })
        } catch (err) {
            console.log("UIActions: err in edit search");
        }
    }
}