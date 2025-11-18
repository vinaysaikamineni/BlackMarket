import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  email: string = '';
  password: string = '';
  login() {
    console.log("Email:", this.email);
    console.log("Password:", this.password);

    if (this.email === 'admin@gmail.com' && this.password === '123456') {
      //alert("Login successful!");
      this.router.navigate(['/dashboard']);
    } else {
      alert("Invalid username or password");
    }
  }

}
