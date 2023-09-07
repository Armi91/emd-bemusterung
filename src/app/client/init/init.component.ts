import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { autoId } from 'src/app/helpers';
import { ProjectActions } from '../state/project/project.actions';
import { ProjectState } from '../state/project/project.state';


@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styles: []
})
export class InitComponent {

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
    
  }

  newProjectForm = this.fb.group({
    name: ['', Validators.required],
    code: ['', Validators.required],
    apartmentNumber: ['', Validators.required],
    id: [autoId()]
  });

  get name() { return this.newProjectForm.get('name'); }
  get code() { return this.newProjectForm.get('code'); }
  get apartmentNumber() { return this.newProjectForm.get('apartmentNumber'); }

  newProjectFormSubmit() {
    if (this.newProjectForm.valid) {
      // TODO: Implement Dispatch Action
      this.store.dispatch(ProjectActions.createProject(this.newProjectForm.value as ProjectState));
    }
  }
  
}
