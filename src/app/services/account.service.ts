import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Account {
  id: number;
  balance: number;
  transactions: Transaction[];
}

export interface Transaction {
  id: number;
  date: string;
  amount: number;
  balance: number;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8080/accounts';

  constructor(private http: HttpClient) {}

  createAccount(initialBalance: number): Observable<Account> {
    return this.http.post<Account>(`${this.apiUrl}?initialBalance=${initialBalance}`, {});
  }

  deposit(accountId: number, amount: number): Observable<Account> {
    return this.http.post<Account>(`${this.apiUrl}/${accountId}/deposit?amount=${amount}`, {});
  }

  withdraw(accountId: number, amount: number): Observable<Account> {
    return this.http.post<Account>(`${this.apiUrl}/${accountId}/withdraw?amount=${amount}`, {});
  }

  getStatement(accountId: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/${accountId}/statement`);
  }
}