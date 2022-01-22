import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentObj } from 'src/shared/models/shared.model';
import { environment } from 'src/environments/environment';

export interface UpdatePayload {
  teamNumber: string;
  round1Mark: number;
  round2Mark: number;
  round2Bonus: number;
  state: string;
  totalMark: number;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
}
