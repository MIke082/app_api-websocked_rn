export default function listReducer(state = [], actions){
    if(actions.type === 'GET_LIST'){
        return actions.payload;
    }
    return state
}