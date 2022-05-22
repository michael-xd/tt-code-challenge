import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Magazine } from '../models/magazines.models';

@Injectable({
  providedIn: 'root',
})
export class MagazineService {
  constructor(private http: HttpClient) {}

  loadAllMagazines(): Observable<Magazine[]> {
    return this.http.get<Magazine[]>('/assets/data/magazines.json');
  }
}
