import { Component } from '@angular/core';
import { AccountService, Account } from '../../services/account.service';
import { FormsModule } from '@angular/forms';
import { DecimalPipe, CommonModule } from '@angular/common';



@Component({
  selector: 'app-account-create',
  imports: [FormsModule, DecimalPipe, CommonModule],
  templateUrl: './account-create.component.html',
  standalone: true  })
export class AccountCreateComponent {
  initialBalance = 0;
  account?: Account;

  constructor(private accountService: AccountService) {}

  createAccount() {
    this.accountService.createAccount(this.initialBalance).subscribe(acc => this.account = acc);
  }
}