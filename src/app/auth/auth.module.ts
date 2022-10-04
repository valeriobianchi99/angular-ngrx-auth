import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'
import {Route, RouterModule} from '@angular/router'
import {StoreModule} from '@ngrx/store'
import {HttpClientModule} from '@angular/common/http'

import {RegisterComponent} from 'src/app/auth/components/register/register.component'
import {reducers} from 'src/app/auth/store/reducers'
import {AuthService} from 'src/app/auth/services/auth.service'
import {EffectsModule} from '@ngrx/effects'
import {RegisterEffect} from './store/effects/register.effect'
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module'
import { PersistanceService } from '../shared/services/persistance.service'

const routes: Route[] = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    HttpClientModule,
    BackendErrorMessagesModule
  ],
  providers: [AuthService, PersistanceService],
  declarations: [RegisterComponent],
})
export class AuthModule {}
