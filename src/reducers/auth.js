import * as actionType from '../constants/actionTypes'

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }))

      return { ...state, authData: action.data, loading: false, errors: null }
    case actionType.AUTH_ERROR:
      return { ...state, loading: false, errors: true }
    case actionType.AUTH_RESET:
      return { ...state, loading: false, errors: false }
    case actionType.LOGOUT:
      localStorage.clear()

      return { ...state, authData: null, loading: false, errors: null }
    default:
      return state
  }
}

export default authReducer
