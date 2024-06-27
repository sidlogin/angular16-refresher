import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/http-api/interfaces/api';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.scss']
})
export class ApiIntegrationComponent implements OnInit {
  posts$!: Observable<Post[]>;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log('API IntegrationComponent initialized');
    this.posts$ = this.apiService.getPosts();
  }
}
