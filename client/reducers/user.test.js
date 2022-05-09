import { SET_USER, CLEAR_USER } from '../actions/user'
import userReducer from './user'

jest.mock('../auth0-utils')

describe('user reducer', () => {
  it('returns new user object on "SET_USER"', () => {
    const user = {
      id: 1,
      name: 'Firstname Lastname',
      type: 'business',
    }

    const prevState = {
      firstName: '',
      isAdmin: false,
      gardenId: null,
      id: null,
    }

    const action = {
      type: SET_USER,
      user,
    }
    const state = userReducer(oldState, action)
    expect(state.name).toBe('Firstname Lastname')
    expect(state).not.toBe(oldState)
  })

  it('returns default empty user object on "CLEAR_USER"', () => {
    const user = {
      id: 1,
      name: 'Firstname Lastname',
      type: 'business',
    }
    const action = {
      type: CLEAR_USER,
    }
    const state = userReducer(oldState, action)
    expect(state.type).toBeNull()
    expect(state).not.toBe(oldState)
  })

  it('returns old state on unknown action type', () => {
    const oldState = {
      firstName: 'test',
      isAdmin: false,
      gardenId: 2,
      id: 5,
    }
    const action = {
      type: 'UNKNOWN_ACTION',
    }
    const state = userReducer(oldState, action)
    expect(state).toBe(oldState)
  })
})
