import { APIaddUser, APIgetUserByAuth0Id } from '../apis/users'

export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'
export const ADD_USER_PENDING = 'ADD_USER_PENDING'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const GET_USER_PENDING = 'GET_USER_PENDING'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'

export function setUser(user) {
  return {
    type: SET_USER,
    user,
  }
}

export function clearUser() {
  return {
    type: CLEAR_USER,
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

export function getUserPending() {
  return {
    type: GET_USER_PENDING,
  }
}

export function getUserSuccess(user) {
  return {
    type: GET_USER_SUCCESS,
    currentUser: user,
  }
}

export function addUser(data, navigate, type) {
  console.log('data:', data, 'navigate:', navigate, 'type:', type)
  return (dispatch) => {
    dispatch(addUserPending())
    return APIaddUser(data)
      .then((user) => {
        console.log('User after API:', user)
        dispatch(addUserSuccess(user))
        navigate(type)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function getUserByAuth0Id(auth0Id) {
  return (dispatch) => {
    dispatch(getUserPending())
    return APIgetUserByAuth0Id(auth0Id)
      .then((user) => {
        dispatch(getUserSuccess(user))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
