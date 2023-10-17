export interface RoomData {
  id: string;
  name: string;
  area: number;
  roomType: string;
  roomNumber: string;
  roomExtras?: RoomExtras
}

export interface RoomType {
    id: string;
    name: string;
    icon: string;
    avaliableWallMaterials: string[];
}

export interface RoomExtras {
  [id: string]: RoomExtra;
}

export interface RoomExtra {
  id: string;
  elementName: string;
  description: string;
}