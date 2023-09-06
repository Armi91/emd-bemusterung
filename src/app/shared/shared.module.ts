import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    NavbarComponent
  ]
})
export class SharedModule { }
