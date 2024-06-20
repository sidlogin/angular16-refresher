import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Observable } from 'rxjs';
import { Post } from './interfaces/api';

@Component({
  selector: 'app-http-api',
  templateUrl: './http-api.component.html',
  styleUrls: ['./http-api.component.scss']
})
export class HttpApiComponent {
  posts$: Observable<Post[]> = this.apiService.getPosts();
  constructor(private apiService: ApiService) { }
  
}
