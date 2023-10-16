import { Timestamp } from "firebase/firestore";

export interface FileData {
    id: string;
    name: string;
    url: string;
    description: string;
    createdAt: Timestamp;
}