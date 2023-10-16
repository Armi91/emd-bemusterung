import { RoomElement } from 'src/app/interfaces/room-element.interface';

export const flushPlate: RoomElement = {
  id: 'flushPlate',
  name: 'Betätigungsplatte',
  priceFor: 'item', //item, meter
  elementType: 'simple',
  levels: [
    {
      id: '1',
      level: 'standard',
      image: 'assets/images/sanitaer/sanitaer_betaetigungsplatte_1.jpg',
      description: `Betätigungsplatte, Fab. Geberit Sigma20 (o. Gleichwertig), für 2-Mengen-Spülung weiß/chrom.`,
      extraPrice: 0,
      forSanitarGeneralChoices: true,
      variants: [],
    },
    {
      id: '2',
      level: 'mehrprice',
      image: 'assets/images/sanitaer/sanitaer_betaetigungsplatte_1.jpg',
      description: `Betätigungsplatte, Fab. Geberit Sigma20 (o. Gleichwertig), für 2-Mengen-Spülung edelstahl gebürstet / chrom.`,
      extraPrice: 90,
      forSanitarGeneralChoices: true,
      variants: [],
    },
  ],
};
