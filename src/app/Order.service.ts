import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Order } from './Order'; 

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = 'https://localhost:44353/api/orders';  
  urlRequest = '/api/orders';  
  constructor(private http: HttpClient) { }
  getAllOrders(): Observable<Order[]> {  
    return this.http.get<Order[]>(this.urlRequest,httpOptions);  
  }  
  createOrder(order: Order): Observable<Order> {  
    return this.http.post<Order>(this.url, order, httpOptions);  
  }  
}
