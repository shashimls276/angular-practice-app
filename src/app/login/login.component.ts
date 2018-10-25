import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, NgForm } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router : Router) { }

  ngOnInit() {
  }

  logInVerification(form : NgForm){
    const value = form.value;
    this.router.navigate(['home']);
   
  }

}
