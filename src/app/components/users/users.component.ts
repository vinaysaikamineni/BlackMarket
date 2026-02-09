import { Component } from '@angular/core';

type UserRow = { name: string; email: string; role: string };

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  searchTerm = '';

  users: UserRow[] = [
    { name: 'John Doe', email: 'john.doe@blackmarket.com', role: 'Admin' },
    { name: 'Sarah Smith', email: 'sarah.smith@blackmarket.com', role: 'User' },
    { name: 'Michael Brown', email: 'michael.brown@blackmarket.com', role: 'Editor' },
    { name: 'Emily Davis', email: 'emily.davis@blackmarket.com', role: 'User' },
    { name: 'David Wilson', email: 'david.wilson@blackmarket.com', role: 'Admin' },
    { name: 'Sophia Taylor', email: 'sophia.taylor@blackmarket.com', role: 'User' },
    { name: 'James Anderson', email: 'james.anderson@blackmarket.com', role: 'Editor' },
    { name: 'Olivia Thomas', email: 'olivia.thomas@blackmarket.com', role: 'User' },
    { name: 'Daniel Martinez', email: 'daniel.martinez@blackmarket.com', role: 'Admin' },
    { name: 'Emma White', email: 'emma.white@blackmarket.com', role: 'User' }
  ];

  get filteredUsers(): UserRow[] {
    const q = this.searchTerm.trim().toLowerCase();
    if (!q) return this.users;

    return this.users.filter(u =>
      u.name.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q) ||
      u.role.toLowerCase().includes(q)
    );
  }

  clearSearch() {
    this.searchTerm = '';
  }
}