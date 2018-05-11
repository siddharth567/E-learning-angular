import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule,
  MatRippleModule,
  MatTableModule
} from '@angular/material';

const modules = [
  CommonModule,
  FormsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule,
  MatRippleModule,
  MatTableModule
];

@NgModule({
  imports: [   CommonModule,
  FormsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule,
  MatRippleModule,
  MatTableModule ],
  exports: [   CommonModule,
  FormsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule,
  MatRippleModule,
  MatTableModule ],
  declarations: [],
})
export class MaterialModule { }
