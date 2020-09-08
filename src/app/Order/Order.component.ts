import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { OrderService } from '../Order.service';  
import { Order } from '../Order';  
import { allowedNodeEnvironmentFlags } from 'process';
@Component({
  selector: 'app-Order',
  templateUrl: './Order.component.html',
  styleUrls: ['./Order.component.css']
})
export class OrderComponent implements OnInit {
  dataSaved = false;  
  OrderForm: any;  
  allOrders: Observable<Order[]>;  
  orders: Observable<Order>;
  OrderIdUpdate = null;  
  message = null;  
  constructor(private formbulider: FormBuilder, private OrderService:OrderService) { }
  ngOnInit() {
    this.OrderForm = this.formbulider.group({  
      Contents: ['', [Validators.required]],  
      IsMorning: [false],  
    });  
    this.loadAllOrders();  
  }
  loadAllOrders() {  
    this.allOrders = this.OrderService.getAllOrders();  
  } 
  onFormSubmit() {  
    this.dataSaved = false;  
    const Order = this.OrderForm.value;  
    this.CreateOrder(Order);  
    this.OrderForm.reset();  
  } 
  CreateOrder(Order: Order) {  
    if (this.OrderIdUpdate == null) {  
      this.OrderService.createOrder(Order).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.message = 'Registro salvo com sucesso';  
          this.loadAllOrders();  
          this.OrderIdUpdate = null;  
          this.OrderForm.reset();  
        }  
      );  
    } 
  }  
  resetForm() {  
    this.OrderForm.reset();  
    this.message = null;  
    this.dataSaved = false;  
  } 
}