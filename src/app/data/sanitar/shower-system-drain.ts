import { RoomElement } from 'src/app/interfaces/room-element.interface';

export const showerSystemDrain: RoomElement = {
  id: 'showerSystemDrain',
  name: 'Duschsystem - Ablauf',
  priceFor: 'item', //item, meter
  elementType: 'simple',
  levels: [
    {
      id: '1',
      level: 'standard',
      image: 'assets/images/sanitaer/sanitaer_duschsystem-ablauf_1_1.jpg',
      description: `Duschsystem Fab. Evineo ineo (o. gleichwertig), Rechteck-Duschwanne Komplett-Set Steinoptik weiß, mit rutschhemmender Oberfläche, Abmessungen: Breite 90 cm, Länge ca. 100cm`,
      extraPrice: 0,
      forSanitarGeneralChoices: true,
      variants: [
        {
          id: '1',
          image: 'assets/images/sanitaer/sanitaer_duschsystem-ablauf_1_1.jpg',
          description: ``,
        },
        {
          id: '2',
          image: 'assets/images/sanitaer/sanitaer_duschsystem-ablauf_1_2.jpg',
          description: ``,
        },
      ],
    },
    {
      id: '2',
      level: 'mehrprice',
      image: 'assets/images/sanitaer/sanitaer_duschsystem-ablauf_2.jpg',
      description: `Duschsystem Fab. Geberit Setaplano (o. gleichwertig), Rechteck-Duschwanne, weiß Abmessungen: Breite 90 cm, Länge ca. 100cm`,
      extraPrice: 480,
      forSanitarGeneralChoices: true,
      variants: [],
    },
    {
      id: '3',
      level: 'mehrprice',
      image: 'assets/images/sanitaer/sanitaer_duschsystem-ablauf_3.jpg',
      description: `Boden in der Dusche gefliest, Duschrinne Fab. Hansgrohe RainDrain Rock (o. gleichwertig), als Kompettset, Breite 90 cm, Abdeckung befliest, inkl. Gefälleausbildung im Estrich`,
      extraPrice: 650,
      forSanitarGeneralChoices: true,
      variants: [],
    },
    {
      id: '4',
      level: 'mehrprice',
      image: 'assets/images/sanitaer/sanitaer_duschsystem-ablauf_4.jpg',
      description: `Boden in der Dusche gefliest, Duschrinne Fab. Geberit Cleanline (o. gleichwertig), als Kompettset, Breite 90 cm, Abdeckung aus Edelstahl, inkl. Gefälleausbildung im Estrich`,
      extraPrice: 670,
      forSanitarGeneralChoices: true,
      variants: [],
    },
  ],
};
