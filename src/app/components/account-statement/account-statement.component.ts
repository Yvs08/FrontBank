import { Component } from '@angular/core';
import { AccountService, Transaction } from '../../services/account.service';
import { DatePipe, DecimalPipe, CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-account-statement',
  imports: [DatePipe,DecimalPipe,FormsModule,CommonModule],
  templateUrl: './account-statement.component.html',
  standalone: true
})
export class AccountStatementComponent {
  accountId!: number;
  transactions: Transaction[] = [];

  constructor(private accountService: AccountService) {}

  getStatement() {
    this.accountService.getStatement(this.accountId).subscribe(txs => this.transactions = txs);
  }

  print() {
    window.print();
  }
}