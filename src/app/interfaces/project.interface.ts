import { Timestamp } from "firebase/firestore";

export interface ProjectData {
    id: string;
    name: string;
    code: string;
    apartmentNumber: string;
    lastUpdated: Timestamp;
    isAccepted: boolean;
}