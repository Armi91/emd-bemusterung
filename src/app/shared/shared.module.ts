import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatSidenavModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    NavbarComponent,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatSidenavModule
  ]
})
export class SharedModule { }
