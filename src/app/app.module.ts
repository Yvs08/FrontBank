import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountCreateComponent } from './components/account-create/account-create.component';
import { AccountActionsComponent } from './components/account-actions/account-actions.component';
import { AccountStatementComponent } from './components/account-statement/account-statement.component';
import { AppRoutingModule } from './app.routes';
import { DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';




@NgModule({
  declarations: [
    
        
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DatePipe,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
