import { SET_USER, CLEAR_USER } from '../actions/user'
import userReducer from './user'

jest.mock('../auth0-utils')

describe('user reducer', () => {
  it('returns new user object on "SET_USER"', () => {
    const user = {
      name: 'Firstname Lastname',
      type: 'business',
    }

    const prevState = {
      name: '',
      type: null,
    }

    const action = {
      type: SET_USER,
      user,
    }
    const state = userReducer(prevState, action)
    expect(state.name).toBe('Firstname Lastname')
    expect(state).not.toBe(prevState)
  })

  it('returns default empty user object on "CLEAR_USER"', () => {
    const prevState = {
      id: 1,
      username: 'Firstname Lastname',
      token: 'qwertyuiop',
    }

    const action = {
      type: CLEAR_USER,
    }
    const state = userReducer(prevState, action)
    expect(state.id).toBeNull()
    expect(state).not.toBe(prevState)
  })

  it('returns old state on unknown action type', () => {
    const prevState = {
      name: '',
      name: false,
      type: null,
    }
    const action = {
      type: 'UNKNOWN_ACTION',
    }
    const state = userReducer(prevState, action)
    expect(state).toBe(prevState)
  })
})
