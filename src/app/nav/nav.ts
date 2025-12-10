import { Component } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-nav',
  imports: [NgClass],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
   tasks = [
    { id: 1, title: 'Design Homepage', status: 'In Progress', due: '2025-12-12', priority: 'High' },
    { id: 2, title: 'API Integration', status: 'Completed', due: '2025-12-10', priority: 'Medium' },
    { id: 3, title: 'Fix Login Bug', status: 'Pending', due: '2025-12-15', priority: 'Low' }
  ];

  getStatusClass(status: string): string {
    return status.toLowerCase().replace(' ', '-');
  }
}
