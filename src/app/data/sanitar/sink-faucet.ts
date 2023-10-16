import { RoomElement } from 'src/app/interfaces/room-element.interface';

export const sinkFaucet: RoomElement = {
  id: 'sinkFaucet',
  name: 'Waschbeckenarmatur',
  priceFor: 'item', //item, meter
  elementType: 'simple',
  levels: [
    {
      id: '1',
      level: 'standard',
      image: 'assets/images/sanitaer/sanitaer_waschtischarmatur_1.jpg',
      description: `Waschtischarmatur Fab. Hansgrohe Vernis Blend (o. gleichwertig), 100 mm, chrom`,
      extraPrice: 0,
      forSanitarGeneralChoices: true,
      variants: [],
    },
    {
      id: '2',
      level: 'mehrprice',
      image: 'assets/images/sanitaer/sanitaer_waschtischarmatur_2.jpg',
      description: `Waschtischarmatur Fab. Ideal Standard Ceraline (o. gleichwertig), 100 mm, in zwei Farben erhältlich (chrom oder schwarz matt)`,
      extraPrice: 80,
      forSanitarGeneralChoices: true,
      variants: [],
    },
    {
      id: '3',
      level: 'mehrprice',
      image: 'assets/images/sanitaer/sanitaer_waschtischarmatur_3.jpg',
      description: `Waschtischarmatur Fab. Steinberg Serie 100 (o. gleichwertig), 100 mm, in zwei Farben erhältlich (chrom oder schwarz matt)`,
      extraPrice: 310,
      forSanitarGeneralChoices: true,
      variants: [],
    },
  ],
};
