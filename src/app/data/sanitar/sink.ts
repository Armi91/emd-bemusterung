import { RoomElement } from 'src/app/interfaces/room-element.interface';

export const sink: RoomElement = {
  id: 'sink',
  name: 'Waschbecken',
  priceFor: 'item', //item, meter
  elementType: 'simple',
  levels: [
    {
      id: '1',
      level: 'standard',
      image: 'assets/images/sanitaer/sanitaer_waschbecken_1_1.jpg',
      description: `Waschbecken Fab. Evineo iNEO2 (o. Gleichwertig), Breite 61 cm / Tiefe 46 cm Waschbeckenunterschrank Evineo, in drei Farben erhältlich (weiß Hochglanz / anthrazit matt / Eiche dekor)`,
      extraPrice: 0,
      forSanitarGeneralChoices: true,
      variants: [
        {
          id: '1',
          image: 'assets/images/sanitaer/sanitaer_waschbecken_1_1.jpg',
          description: ``,
        },
        {
          id: '2',
          image: 'assets/images/sanitaer/sanitaer_waschbecken_1_2.jpg',
          description: ``,
        },
        {
          id: '3',
          image: 'assets/images/sanitaer/sanitaer_waschbecken_1_3.jpg',
          description: ``,
        },
      ],
    },
    {
      id: '2',
      level: 'mehrprice',
      image: 'assets/images/sanitaer/sanitaer_waschbecken_2_1.jpg',
      description: `Waschbecken Fab. Ideal Standard Eurovit Plus (o. Gleichwertig), Breite 81 cm / Tiefe 47 cmWaschbeckenunterschrank Ideal Standard, in zwei Farben erhältlich (weiß Hochglanz / Eiche dekor)`,
      extraPrice: 310,
      forSanitarGeneralChoices: true,
      variants: [
        {
          id: '1',
          image: 'assets/images/sanitaer/sanitaer_waschbecken_2_1.jpg',
          description: ``,
        },
        {
          id: '2',
          image: 'assets/images/sanitaer/sanitaer_waschbecken_2_2.jpg',
          description: ``,
        },
      ],
    },
    {
      id: '3',
      level: 'mehrprice',
      image: 'assets/images/sanitaer/sanitaer_waschbecken_3_1.jpg',
      description: `Waschbecken Fab. Geberit iCon (o. Gleichwertig), Breite 75 cm / Tiefe 45 cm Waschbeckenunterschrank Evineo, in drei Farben erhältlich (weiß Hochglanz / anthrazit matt / Eiche dekor)`,
      extraPrice: 580,
      forSanitarGeneralChoices: true,
      variants: [
        {
          id: '1',
          image: 'assets/images/sanitaer/sanitaer_waschbecken_3_1.jpg',
          description: ``,
        },
        {
          id: '2',
          image: 'assets/images/sanitaer/sanitaer_waschbecken_3_2.jpg',
          description: ``,
        },
        {
          id: '3',
          image: 'assets/images/sanitaer/sanitaer_waschbecken_3_3.jpg',
          description: ``,
        },
      ],
    },
  ],
};
