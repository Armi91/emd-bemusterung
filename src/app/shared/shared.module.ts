import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { FileSizePipe } from './file-size.pipe';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { ChangesListComponent } from './changes-list/changes-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';

@NgModule({
  declarations: [NavbarComponent, FileUploadComponent, FileSizePipe, ChangesListComponent, ProjectPreviewComponent],
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
    MatSidenavModule,
    MatToolbarModule,
    MatStepperModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatMenuModule,
    NgxMatFileInputModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatTooltipModule,
    MatTabsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    NavbarComponent,
    FileUploadComponent,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatStepperModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatMenuModule,
    NgxMatFileInputModule,
    FileSizePipe,
    MatProgressBarModule,
    ChangesListComponent,
    MatBadgeModule,
    MatTooltipModule,
    MatTabsModule,
  ],
})
export class SharedModule {}
