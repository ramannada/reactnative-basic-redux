export default (state = null, action) => {
    switch(action.type) {
        case 'selectLibrary':
            return action.id;
        default:
            return state;
    }
}