import { RoomElement } from "src/app/interfaces/room-element.interface";

export const doorHardware: RoomElement = {
    id: 'doorHardware',
    name: 'Türbeschläge',
    priceFor: 'item',
    elementType: 'simple',
    notApplicable: false,
    levels: [
        {
            id: '1',
            level: 'standard',
            image: 'assets/images/items/doorHardware/Türbeschläge_5_2_1.png',
            description: `Türgriff, Schild, Scharnierabdeckung. Fab. Cube. Chrom glänzend`,
            extraPrice: 0,
            forGeneralChoices: true,
            forSanitarGeneralChoices: true,
            variants: [],
        },
        {
            id: '2',
            level: 'mehrprice',
            image: 'assets/images/items/doorHardware/Türbeschläge_5_2_2_1.png',
            description: `Türgriff, Schild, Scharnierabdeckung Fab. Cube. Schwarz matt/gebürstetes Chrom`,
            extraPrice: 0,
            forGeneralChoices: true,
            forSanitarGeneralChoices: true,
            variants: [
                {
                    id: '1',
                    image: 'assets/images/items/doorHardware/Türbeschläge_5_2_2_1.png',
                    description: ``
                },
                
                {
                    id: '2',
                    image: 'assets/images/items/doorHardware/Türbeschläge_5_2_2_2.png',
                    description: ``
                }
            ]
        }
    ]
}