import {RouterModule, Routes} from '@angular/router';
import {ItemListComponent} from './item-list/item-list.component';
import {ItemDetailsComponent} from './item-details/item-details.component';
import {CreateItemComponent} from './create-item/create-item.component';
import {ItemEditComponent} from './item-edit/item-edit.component';
import {LoginComponent} from './auth/login/login.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: 'items', component: ItemListComponent },
  { path: 'view/:id', component: ItemDetailsComponent },
  { path: 'add', component: CreateItemComponent },
  { path: 'edit/:id', component: ItemEditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
