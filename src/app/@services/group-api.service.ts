import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from '../@models/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupApiService {
  private url = '/api/group';

  constructor(private http: HttpClient) { }

  取得資料() {
    console.log('發送GET請求到:', this.url);
    return this.http.get<Group[]>(this.url);
  }

}
