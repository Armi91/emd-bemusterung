import { RoomElement } from "src/app/interfaces/room-element.interface";

export const showerSystemFitting: RoomElement = {
    id: 'showerSystemFitting',
    name: 'Duschsystem - Armatur',
    priceFor: 'item', //item, meter
    elementType: 'simple',
    levels: [
        {
            id: '1',
            level: 'standard',
            image: 'assets/images/sanitaer/sanitaer_duschsystem-armatur_1.jpg',
            description: `Duschsystem Fab. Grohe Grohtherm (o. gleichwertig), rund, Unterputz, chrom`,
            extraPrice: 0,
            forSanitarGeneralChoices: true,
            variants: [
            ]
        },
        {
            id: '2',
            level: 'mehrprice',
            image: 'assets/images/sanitaer/sanitaer_duschsystem-armatur_2.jpg',
            description: `Duschsystem Fab. Ideal Standard Archimodule Soft (o. gleichwertig), Unterputz, chrom`,
            extraPrice: 870,
            forSanitarGeneralChoices: true,
            variants: [
            ]
        },
        {
            id: '3',
            level: 'mehrprice',
            image: 'assets/images/sanitaer/sanitaer_duschsystem-armatur_3_1.jpg',
            description: `Duschsystem Fab. Steinberg Sensual Rain "Rain Shower" (o. gleichwertig), Unterputz, schwarz oder chrom`,
            extraPrice: 410,
            forSanitarGeneralChoices: true,
            variants: [
                {
                    id: '1',
                    image: 'assets/images/sanitaer/sanitaer_duschsystem-armatur_3_1.jpg',
                    description: ``
                },
                {
                    id: '2',
                    image: 'assets/images/sanitaer/sanitaer_duschsystem-armatur_3_2.jpg',
                    description: ``
                },
            ]
        },
    ],
}