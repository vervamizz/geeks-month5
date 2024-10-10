import { types} from "./types";


const initialState = {
    users: []
}
export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case types.USERS:
            return{...state, users: action.payload}
        default:return state
        }
}

// import {types} from './types'
//
// const initialState = {
//     value: '',
//     users: []
// }
// export default function usersReducer(state = initialState, action) {
//     switch (action.type) {
//         case types.VALUE:
//             return {...state, value: action.payload}
//         case types.ADD_USER:
//             return {...state, users: [...state.users, action.payload]}
//         case types.DELETE_ALL:
//             return {value: '', users: []}
//         default:return state
//     }
// }