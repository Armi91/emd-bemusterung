import { RoomElement } from "src/app/interfaces/room-element.interface";

export const electricEquipment: RoomElement = {
    id: 'electricEquipment',
    name: 'Elektrotechnik',
    priceFor: 'item',
    elementType: 'electric',
    notApplicable: false,
    levels: [
        {
            id: 'socket_white',
            level: 'standard',
            image: 'assets/images/items/electric/Elektrotechnik_Berker_4_1_1_1.jpg',
            description: `Elektropunkt (Wahlweise Steckdose / einfacher Schalter / Lichtauslass) in den Wohnräumen`,
            extraPrice: 0,
            variants: [],
            forGeneralChoices: true,
            forSanitarGeneralChoices: true,
        },
        {
            id: 'socket_black',
            level: 'mehrprice',
            image: 'assets/images/items/electric/Elektrotechnik_Berker_4_1_1_2.jpg',
            description: `Schalterprogram (Steckdose oder Schalter) in schwarzer Ausführung, pro Stück`,
            extraPrice: 25,
            variants: [],
            forGeneralChoices: true,
            forSanitarGeneralChoices: true,
        },
        {
            id: 'switch_white',
            level: 'standard',
            image: 'assets/images/items/electric/Elektrotechnik_Berker_4_1_2_1.jpg',
            description: `Elektropunkt (Wahlweise Steckdose / einfacher Schalter / Lichtauslass) in den Wohnräumen`,
            extraPrice: 0,
            variants: [],
        },
        {
            id: 'switch_black',
            level: 'mehrprice',
            image: 'assets/images/items/electric/Elektrotechnik_Berker_4_1_2_2.jpg',
            description: `Schalterprogram (Steckdose oder Schalter) in schwarzer Ausführung, pro Stück`,
            extraPrice: 25,
            variants: [],
        },
        {
            id: 'extra_white',
            level: 'mehrprice',
            image: 'assets/images/items/electric/Elektrotechnik_Berker_4_1_2_1.jpg',
            description: `Zusätzlicher Elektropunkt (Wahlweise Steckdose / einfacher Schalter / Lichtauslass) in den Wohnräumen`,
            extraPrice: 120,
            variants: [],
        },
        {
            id: 'extra_black',
            level: 'mehrprice',
            image: 'assets/images/items/electric/Elektrotechnik_Berker_4_1_2_2.jpg',
            description: `Zusätzlicher Elektropunkt (Wahlweise Steckdose / einfacher Schalter / Lichtauslass) in den Wohnräumen`,
            extraPrice: 135,
            variants: [],
        },
        {
            id: 'dimmer_white',
            level: 'mehrprice',
            image: 'assets/images/items/electric/Elektrotechnik_Berker_4_1_4_1.jpg',
            description: `Einfacher Schalter mit Dimmfunktion anstatt An/Aus`,
            extraPrice: 60,
            variants: [],
        },
        {
            id: 'dimmer_black',
            level: 'mehrprice',
            image: 'assets/images/items/electric/Elektrotechnik_Berker_4_1_4_2.jpg',
            description: `Einfacher Schalter mit Dimmfunktion anstatt An/Aus`,
            extraPrice: 65,
            variants: [],
        },
        {
            id: 'sensor',
            level: 'mehrprice',
            image: 'assets/images/items/electric/Rauchmelder_4_1_6_2.jpg',
            description: `Lieferung und Montage Rauchmelder, Batteriebetrieben. Fab.: ALPENLUFT, weiss, 10 Jahre Batterie, Feuermelder Flach, Rauchwarnmelder, Brandmelder`,
            extraPrice: 0,
            variants: [],
        },
        {
            id: 'electric_blind',
            level: 'mehrprice',
            image: 'assets/images/items/electric/Elektrotechnik_4_1_7.jpg',
            description: `Ausführung der Rollläden ELEKTRISCH (mit Motor)`,
            extraPrice: 400,
            variants: [],
        },
        {
            id: 'socket_shift',
            level: 'mehrprice',
            image: '',
            description: `Änderung der Elektroplanung (Verschiebung des Elektropunktes), wird pro Stück berechnet, möglich spätestens fünf Wochen vor Beginn der Rohmontage`,
            extraPrice: 50,
            variants: [],
        },
    ]
}