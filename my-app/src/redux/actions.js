import {types} from "./types";

export function asyncFunctionAction() {
    return function(){
        setTimeout(()=> {
            alert("hello")
        }, 2000)
    }
}
function getUserAction(users) {
    return {
        type: types.USERS,
        payload: users
    }

}
export function fetchUsersAction() {
    return async function (dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        dispatch(getUserAction(data))
    }
}



export function fetchQuote () {
    return async function (dispatch) {
    dispatch({type: "FETCH_QUOTE_REQUEST"});

    try {
        const response = await fetch('https://api.quotable.io/random')
        const data = await response.json()
        dispatch({
            type: 'FETCH_QUOTE_SUCCESS',
            payload: data.content,
            author: data.author
        })
    } catch (error) {
        dispatch({
            type: "FETCH_QUOTE_FAILURE",
            payload: "Failed to fetch quote",
        })
        }
    }
}






// import {types} from './types'
//
// export function changeTitleAction() {
//     return {
//         type: types.CHANGE_TITLE
//     }
// }
// export function withParamsAction(title) {
//     return {
//         type: types.WITH_PARAMS,
//         payload: title
//     }
// }
// export function changeInputAction(value){
//     return {
//         type:types.VALUE,
//         payload: value
//     }
// }
// export function addUserAction(name) {
//     return {
//         type: types.ADD_USER,
//         payload: name
//     }
// }
// export function deleteUserAction() {
//     return {
//         type: types.DELETE_ALL
//     }
// }