import axios from 'axios';

const url = `https://jsonplaceholder.typicode.com/albums`;

export const getAllList = (lists) => {
    return{
        type: 'GET_LIST',
        payload: lists
    }
}

export const getAllListCreator = () => {
    return (dispatch) => {
        return axios.get(url)
        .then((response)=> {
            dispatch(getAllList(response.data))
        })
    }
}