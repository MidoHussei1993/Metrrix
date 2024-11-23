  import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 import { AuthService } from '../services/auth.service';
import { UserCredentials } from '../types';
   
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ TranslateModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent   {
  

  // Injectables
  authService = inject(AuthService)
   router = inject(Router)
   fb = inject(FormBuilder)
   // Password Visibility
  isVisible = false
  passType = 'password'
  // Loader
  isLoading: boolean = false
  // Form
  loginForm = this.fb.nonNullable.group({
    email: ['admin@admin.com', [Validators.required, Validators.email]],
    password: ['password', [Validators.required, Validators.minLength(8)]],
  })
   
  // Form submission call
  onSubmit() {
    // Test form validity
    this.loginForm.markAllAsTouched()
    if (!this.loginForm.valid) return
    // Initiate Loader
    this.isLoading = true 
    this.login(this.loginForm.getRawValue())
  }

  // Calling login Endpoint from AuthService
  login(credentials: UserCredentials) {
    this.authService.login(credentials).subscribe({
      next: res => {
         this.router.navigateByUrl('/')
      },
      error: error => {

        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

  // Show and hide password toggle
  showPassword() {
    this.isVisible = !this.isVisible
    this.isVisible ? this.passType = 'text' : this.passType = 'password'
  }
 
 
}
