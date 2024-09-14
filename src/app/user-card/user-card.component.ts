import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  @Input() user: any;

  getRoleColor(): string {
    switch (this.user.role.toLowerCase()) {
      case 'admin':
        return 'bg-danger text-white';
      case 'user':
        return 'bg-success text-white';
      case 'moderator':
        return 'bg-warning text-dark';
      default:
        return 'bg-secondary text-white';
    }
  }
}
