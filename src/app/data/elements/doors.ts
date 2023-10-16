import { RoomElement } from "src/app/interfaces/room-element.interface";

export const doors: RoomElement = {
    id: 'door',
    name: 'Innentür',
    priceFor: 'item',
    elementType: 'simple',
    notApplicable: false,
    levels: [
        {
            id: '1',
            level: 'standard',
            image: 'assets/images/items/door/Innentür_5_1_1.jpg',
            description: `Innentüren mit Röhrenspan-Kern, gefälzte Tür, in 3 Standardfarben erhältlich. sichtbare Scharniere. Abgerundete Kanten R2,5 mm. Tur Zarge einstellbar`,
            extraPrice: 0,
            forGeneralChoices: true,
            forSanitarGeneralChoices: true,
            variants: [
                {
                    id: '1',
                    image: 'assets/images/items/door/Innentür_farbe_5_1_1_1.png',
                    description: ``
                },
                {
                    id: '2',
                    image: 'assets/images/items/door/Innentür_farbe_5_1_1_2.png',
                    description: ``
                },
                {
                    id: '3',
                    image: 'assets/images/items/door/Innentür_farbe_5_1_1_3.png',
                    description: ``
                }
            ]
        },
        {
            id: '2',
            level: 'mehrprice',
            image: 'assets/images/items/door/Innentür_5_1_2-.jpg',
            description: `Innentüren mit Röhrenspan-Kern, gefälzte Tür, in 3 Farben erhältlich. sichtbare Scharniere. Abgerundete Kanten R2,5 mm`,
            extraPrice: 0,
            forGeneralChoices: true,
            forSanitarGeneralChoices: true,
            variants: [
                {
                    id: '1',
                    image: 'assets/images/items/door/Innentür_farbe_5_1_2_1.png',
                    description: ``
                },
                {
                    id: '2',
                    image: 'assets/images/items/door/Innentür_farbe_5_1_2_2.png',
                    description: ``
                },
                {
                    id: '3',
                    image: 'assets/images/items/door/Innentür_farbe_5_1_2_3.png',
                    description: ``
                }
            ]
        },
        {
            id: '3',
            level: 'mehrprice',
            image: 'assets/images/items/door/Innentür_5_1_3.png',
            description: `Innentüren mit Röhrenspan-Kern, und mit 4 Lichtausschnitte. Abgerundete Kanten R2,5 mm, Lichtausschnitte Glas: Milchglas VSG22.1`,
            extraPrice: 0,
            forGeneralChoices: true,
            forSanitarGeneralChoices: true,
            variants: [
                {
                    id: '1',
                    image: 'assets/images/items/door/Innentür_farbe_5_1_3_1.png',
                    description: ``
                },
                {
                    id: '2',
                    image: 'assets/images/items/door/Innentür_farbe_5_1_3_2.png',
                    description: ``
                },
                {
                    id: '3',
                    image: 'assets/images/items/door/Innentür_farbe_5_1_3_3.png',
                    description: ``
                },
                {
                    id: '4',
                    image: 'assets/images/items/door/Innentür_farbe_5_1_3_4.png',
                    description: ``
                },
                {
                    id: '5',
                    image: 'assets/images/items/door/Innentür_farbe_5_1_3_5.png',
                    description: ``
                },
                {
                    id: '6',
                    image: 'assets/images/items/door/Innentür_farbe_5_1_3_6.png',
                    description: ``
                }
            ]
        },
    ]
}