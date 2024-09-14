import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/assets/users.json').subscribe((data: any) => {
      this.users = data;
    });
  }
}
