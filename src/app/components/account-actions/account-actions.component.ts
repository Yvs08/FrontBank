import { Component } from '@angular/core';
import { AccountService, Account } from '../../services/account.service';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-account-actions',
  imports: [FormsModule,DecimalPipe],
  templateUrl: './account-actions.component.html',
  standalone: true
})
export class AccountActionsComponent {
  accountId!: number;
  amount!: number;
  account?: Account;

  constructor(private accountService: AccountService) {}

  deposit() {
    this.accountService.deposit(this.accountId, this.amount).subscribe(acc => this.account = acc);
  }

  withdraw() {
    this.accountService.withdraw(this.accountId, this.amount).subscribe(acc => this.account = acc);
  }
}
