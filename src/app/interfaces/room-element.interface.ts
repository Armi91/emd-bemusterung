export interface RoomElement {
    id: string;
    name: string;
    priceFor: 'item' | 'meter';
    levels: ElementLevel[];
    elementType?: 'simple' | 'singleChoice' | 'electric' | 'wall';
    notApplicable?: boolean
}

export interface ElementLevel {
    id: string;
    level: 'standard' | 'mehrprice' | 'individual';
    image?: string;
    description: string;
    extraPrice: number;
    variants: LevelVariant[];
    floorType?: 'vinyl' | 'parquet' | 'tiles' | 'microcement';
    title?: string;
    isTextVariant?: boolean;
    forGeneralChoices?: boolean;
}

export interface LevelVariant {
    id: string;
    image?: string;
    description?: string;
    extraPrice?: number;
}