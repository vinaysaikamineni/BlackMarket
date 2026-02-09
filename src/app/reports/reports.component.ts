import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['../dashboard/dashboard.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

columnDefs = [
  { field: 'name', headerName: 'Name', sortable: true, filter: true },
  { field: 'email', headerName: 'Email', sortable: true, filter: true },
  { field: 'role', headerName: 'Role', sortable: true, filter: true }
];

rowData = [
  { name: 'John Doe', email: 'john@gmail.com', role: 'Admin' },
  { name: 'Sarah Smith', email: 'sarah@gmail.com', role: 'User' },
  { name: 'Michael Brown', email: 'michael@gmail.com', role: 'Editor' },
];

isSidebarCollapsed = false;

toggleSidebar() {
  this.isSidebarCollapsed = !this.isSidebarCollapsed;
}

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}

