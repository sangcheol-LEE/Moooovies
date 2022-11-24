import { USER_LOGIN } from "../action/user_type"

const initialState = {
  email : "",
  password: ""
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_LOGIN :
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password
      }

    default :
      return state
  }
}

export default userReducer