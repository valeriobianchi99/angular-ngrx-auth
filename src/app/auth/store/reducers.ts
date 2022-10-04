import {createReducer, on, Action} from '@ngrx/store'

import {AuthStateInterface} from 'src/app/auth/types/authState.interface'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from 'src/app/auth/store/actions/register.action'

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state: AuthStateInterface): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(registerSuccessAction, (state, action): AuthStateInterface => {
    return {...state, isSubmitting: false, isLoggedIn: true, currentUser: action.currentUser}
  }),
  on(registerFailureAction, (state, action): AuthStateInterface => {
    return {...state, isSubmitting: false, validationErrors: action.errors}
  })
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
