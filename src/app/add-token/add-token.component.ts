import { Component, OnInit } from '@angular/core';
import { Token } from 'src/app/models/token.model';
import { TokenService } from 'src/app/_services/token.service';


@Component({
  selector: 'app-add-token',
  templateUrl: './add-token.component.html',
  styleUrls: ['./add-token.component.css']
})
export class AddTokenComponent implements OnInit {
  token: Token = {
    quantity: 0,
    address: '',
    published: false
  };
  submitted = false;

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  saveToken(): void {
    const data = {
      quantity: this.token.quantity,
      address: this.token.address,
      published: true
    };

    this.tokenService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newToken(): void {
    this.submitted = false;
    this.token = {
      quantity: 0,
      address: '',
      published: false
    };
  }
}
