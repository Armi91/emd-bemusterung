import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin, map, of, switchMap } from 'rxjs';
import { FilesState } from 'src/app/client/state/files/files.state';
import { GeneralChoiceSanitarState } from 'src/app/client/state/general-choice-sanitar/general-choice-sanitar.state';
import { GeneralChoiceState } from 'src/app/client/state/general-choice/general-choice.state';
import { RoomState } from 'src/app/client/state/room/rooms.state';
import { FullProject } from 'src/app/interfaces/full-project.interface';
import { ProjectData } from 'src/app/interfaces/project.interface';
import { DataService } from 'src/app/services/data.service';
import { PreviewService } from 'src/app/services/preview.service';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styles: [`
    img {
      max-width: 100%;
    }
  `],
})
export class ProjectPreviewComponent {
  projectId: string;
  project$: Observable<any> | undefined;
  project: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private previewService: PreviewService,
    private dataSrv: DataService,
    private previewSrv: PreviewService
  ) {
    this.projectId = this.activatedRoute.snapshot.params['projectId'];
  }

  ngOnInit() {
    this.project$ = this.previewService.getFullProject(this.projectId);
    this.project$
      .pipe(
        map((project: FullProject) => {
          console.log(project);
          
          return {
            projectData: this.parseProjectData(project.projectData),
            files: this.parseFiles(project.files),
            // generalChoice: project.generalChoice,
            generalChoice: this.parseGeneralChoice(project.generalChoice),
            generalChoiceSanitar: this.parseGeneralSanitarChoice(project.generalChoiceSanitar),
            rooms: this.parseRooms(project.rooms),
          };
        }),
        switchMap((project) => forkJoin(project))
      )
      .subscribe((project) => {
        console.log(project)
        this.project = project;
      });
  }

  parseProjectData(projectData: ProjectData) {
    return of({
      ...projectData,
      lastUpdated: projectData.lastUpdated.toDate(),
    });
  }

  parseFiles(files: FilesState) {
    const data = Object.keys(files).map((key) => {
      return {
        description: files[key].description,
        name: files[key].name,
        url: files[key].url,
      };
    });
    return of(data);
  }

  parseGeneralChoice(generalChoice: GeneralChoiceState) {
    return forkJoin(this.previewService.createGeneralChoicePreview(generalChoice, 'general'));
  }

  parseGeneralSanitarChoice(generalChoiceSanitar: GeneralChoiceSanitarState) {
    return forkJoin(
      this.previewService.createGeneralChoicePreview(generalChoiceSanitar, 'sanitar')
    );
  }

  parseRooms(rooms: RoomState) {
    return of(this.previewService.parseRooms(rooms));
  }
}
