import {useDispatch, useSelector} from "react-redux";
import {fetchUsersAction} from "../../redux/actions";
import UserCard from "../../components/UserCard";
import {useEffect} from "react";

const UserPage = () => {

    const users = useSelector(state => state.usersSelector.users);
    const dispatch  = useDispatch();

    const getUsers = () => {
        dispatch(fetchUsersAction());
    }
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div>
            <button onClick={getUsers}>get Users</button>
            <div style={{display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                justifyContent: "center",
                alignItems: "center"}}></div>
            {users.map(user => <UserCard userInfo={user}/>)}
        </div>
    )
}
export default UserPage;


// import {useDispatch, useSelector} from 'react-redux'
// import {addUserAction, changeInputAction, deleteUserAction} from '../../redux/actions'
//
// const UsersPage = () => {
//
//     const {value, users} = useSelector(state => state.usersReducer)
//     const dispatch = useDispatch()
//
//     const changeInput = (event) => {
//         dispatch(changeInputAction(event.target.value))
//     }
//     const addUser = () => {
//         dispatch(addUserAction(value))
//     }
//     const deleteUser = () => {
//         dispatch(deleteUserAction())
//     }
//     return (
//         <div>
//             <input type="text" placeholder="Name" onChange={changeInput}/>
//             <button onClick={addUser}>add</button>
//             <button>delete all</button>
//
//             {users.map((user, idx) => <p key={idx}> {user}</p>)}
//         </div>
//     )
// }
//
// export default UsersPage;