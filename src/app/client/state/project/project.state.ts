import { Timestamp } from "@angular/fire/firestore";
export interface ProjectState {
    id: string;
    name: string;
    code: string;
    apartmentNumber: string;
    lastUpdated: Timestamp;
    error?: any;
    isAccepted: boolean;
}

export const initialProjectState: ProjectState = {
    id: '',
    name: '',
    code: '',
    apartmentNumber: '',
    lastUpdated: Timestamp.now(),
    error: null,
    isAccepted: false
}