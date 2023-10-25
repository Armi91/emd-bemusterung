import { FilesState } from '../client/state/files/files.state';
import { GeneralChoiceSanitarState } from '../client/state/general-choice-sanitar/general-choice-sanitar.state';
import { GeneralChoiceState } from '../client/state/general-choice/general-choice.state';
import { RoomState } from '../client/state/room/rooms.state';
import { ProjectData } from './project.interface';

export interface FullProject {
  files: FilesState;
  generalChoice: GeneralChoiceState;
  generalChoiceSanitar: GeneralChoiceSanitarState;
  projectData: ProjectData;
  rooms: RoomState;
}
