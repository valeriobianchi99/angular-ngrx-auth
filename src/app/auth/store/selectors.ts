import {createFeatureSelector, createSelector} from '@ngrx/store'

import {AuthStateInterface} from 'src/app/auth/types/authState.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): boolean => authState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): BackendErrorsInterface | null => authState.validationErrors
)
