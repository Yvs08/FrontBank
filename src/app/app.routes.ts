import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreateComponent } from './components/account-create/account-create.component'; 
import { AccountActionsComponent } from './components/account-actions/account-actions.component';
import { AccountStatementComponent } from './components/account-statement/account-statement.component';

export const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: 'create', component: AccountCreateComponent },
  { path: 'actions', component: AccountActionsComponent },
  { path: 'statement', component: AccountStatementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
