import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './Order/Order.component';
import { OrderService } from './Order.service';  

import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

import { HttpClientModule, HttpClient } from '@angular/common/http';  
import {  
MatButtonModule
} from '@angular/material/button';  
import {MatMenuModule  } from '@angular/material/menu';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule } from '@angular/material/tooltip';
import {MatToolbarModule  } from '@angular/material/toolbar';
import {MatNativeDateModule  } from '@angular/material/core';

import { MatRadioModule } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    BrowserAnimationsModule,  
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule,  
    AppRoutingModule  
  ],
  providers: [HttpClientModule, OrderService,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
