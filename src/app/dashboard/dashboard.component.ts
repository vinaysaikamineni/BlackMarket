import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartData, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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


// BAR CHART
barChartData: ChartData<'bar'> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      data: [120, 150, 100, 200, 180],
      label: 'Sales',
      backgroundColor: '#42A5F5',
      hoverBackgroundColor: '#1E98E5',
    }
  ]
};

barChartOptions: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    legend: { display: true }
  }
};


// PIE CHART
pieChartData: ChartData<'pie'> = {
  labels: ['Admin', 'Users', 'Editors'],
  datasets: [
    {
      data: [10, 60, 30],
      backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
      hoverBackgroundColor: ['#1E88E5', '#43A047', '#FB8C00'],
      borderColor: '#fff',
      borderWidth: 2
    }
  ]
};

pieChartOptions: ChartOptions<'pie'> = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'bottom'
    }
  }
};


  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
