import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProjectActions } from './state/project/project.actions';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styles: [
  ]
})
export class ClientComponent {
  constructor(private store: Store) {
    this.store.dispatch(ProjectActions.fetchProject());
  }
}
