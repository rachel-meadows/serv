// import { getUsers } from '../apis/users'
import { APIaddUser, APIgetUserByAuth0Id } from '../apis/users'

export const SET_USER = 'SET_USER'
export const SET_USERS = 'SET_USERS'
export const CLEAR_USER = 'CLEAR_USER'
export const CLEAR_USERS = 'CLEAR_USERS'
export const ADD_USER_PENDING = 'ADD_USER_PENDING'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'

export function setUser(user) {
  return {
    type: SET_USER,
    user,
  }
}

export function setUsers(users) {
  return {
    type: SET_USERS,
    users,
  }
}

export function clearUser() {
  return {
    type: CLEAR_USER,
  }
}

export function clearUsers() {
  return {
    type: CLEAR_USERS,
  }
}

export function addUserPending() {
  return {
    type: ADD_USER_PENDING,
  }
}

export function addUserSuccess(user) {
  return {
    type: ADD_USER_SUCCESS,
    currentUser: user,
  }
}

export function getUserSuccess(user) {
  return {
    type: GET_USER_SUCCESS,
    currentUser: user,
  }
}

// export function fetchUsers() {
//   return (dispatch) => {
//     return getUsers().then((users) => {
//   dispatch(setUsers(users))
//   return null
// })
//   }
// }

export function addUser(data) {
  return (dispatch) => {
    dispatch(addUserPending())
    return APIaddUser(data)
      .then((user) => {
        dispatch(addUserSuccess(user))
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function getUserByAuth0Id(auth0Id) {
  return (dispatch) => {
    return APIgetUserByAuth0Id(auth0Id)
      .then((user) => {
        dispatch(getUserSuccess(user))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
