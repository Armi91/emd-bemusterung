import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FullProject } from 'src/app/interfaces/full-project.interface';
import { DataService } from 'src/app/services/data.service';
import { PreviewService } from 'src/app/services/preview.service';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styles: [],
})
export class ProjectPreviewComponent {
  projectId: string;
  project$: Observable<FullProject> | undefined;

  constructor(private activatedRoute: ActivatedRoute, private previewService: PreviewService, private dataSrv: DataService) {
    this.projectId = this.activatedRoute.snapshot.params['projectId'];
  }

  ngOnInit() {
    this.project$ = this.previewService.getGeneralChoices(this.projectId);
    this.project$.subscribe((project) => console.log(project));
  }
}
