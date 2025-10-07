import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLoggedIn = false; // default = Read Only

  constructor(private router: Router) {}

  toggleLogin(): void {
    if (this.isLoggedIn) {
      // Logout flow
      // this.authService.logout();
      this.router.navigate(['/']); // redirect to home or public page
    } else {
      // Login flow
      this.router.navigate(['/admin/login']); // route to login page
    }
  }
}
