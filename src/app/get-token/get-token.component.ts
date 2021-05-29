import { Component, OnInit } from '@angular/core';
import { Token } from '../models/token.model';
import { TokenService } from '../_services/token.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-get-token',
  templateUrl: './get-token.component.html',
  styleUrls: ['./get-token.component.css']
})
export class GetTokenComponent implements OnInit {
  tokens?: Token[];
  currentToken?: Token;
  currentIndex = -1;
  quantity = 0;
  address = ''

  constructor(
    private tokenService: TokenService,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveTokens();
  }
  retrieveTokens(): void {
    this.tokenService.getAll()
      .subscribe(
        data => {
          this.tokens = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTokens();
    this.currentToken = undefined;
    this.currentIndex = -1;
  }

  setActiveToken(token: Token, index: number): void {
    this.currentToken = token;
    this.currentIndex = index;
  }

  deleteToken(): void {
    this.tokenService.delete(this.currentToken?._id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/gettoken']);
          this.refreshList();
          window.alert("Get token successful. Confirmation email will be sent to you");
        },
        error => {
          console.log(error);
        });
  }

}
