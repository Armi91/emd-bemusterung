export interface RoomData {
  id: string;
  name: string;
  area: number;
  roomType: string;
  roomNumber: string;
}

export interface RoomType {
    id: string;
    name: string;
    icon: string;
    avaliableWallMaterials: string[];
}

export interface RoomExtras {
  
}