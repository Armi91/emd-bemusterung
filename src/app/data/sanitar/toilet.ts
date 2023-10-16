import { RoomElement } from 'src/app/interfaces/room-element.interface';

export const toilet: RoomElement = {
  id: 'toilet',
  name: 'Tiefspül-WC',
  priceFor: 'item', //item, meter
  elementType: 'simple',
  levels: [
    {
      id: '1',
      level: 'standard',
      image: 'assets/images/sanitaer/sanitaer_tiefspuel-wc_1.jpg',
      description: `Tiefspül-WC, Fab. Evineo ineo (o. Gleichwertig), spülrandlos, mit WC-Sitz und Deckel softclose`,
      extraPrice: 0,
      forSanitarGeneralChoices: true,
      variants: [],
    },
    {
      id: '2',
      level: 'mehrprice',
      image: 'assets/images/sanitaer/sanitaer_tiefspuel-wc_2.jpg',
      description: `Tiefspül-WC, Fab. Ideal-Standard Connect (o. Gleichwertig), spülrandlos, mit WC-Sitz und Deckel softclose`,
      extraPrice: 120,
      forSanitarGeneralChoices: true,
      variants: [],
    },
    {
      id: '3',
      level: 'mehrprice',
      image: 'assets/images/sanitaer/sanitaer_tiefspuel-wc_3.jpg',
      description: `Tiefspül-WC, Fab. Geberit iCon (o. Gleichwertig), spülrandlos, mit WC-Sitz und Deckel softclose`,
      extraPrice: 350,
      forSanitarGeneralChoices: true,
      variants: [],
    },
  ],
};
