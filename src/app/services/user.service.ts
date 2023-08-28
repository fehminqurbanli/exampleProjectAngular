import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userName:string='Abs';
  apiUrl:string='https://jsonplaceholder.typicode.com/';
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.apiUrl+'users');
  }
}
