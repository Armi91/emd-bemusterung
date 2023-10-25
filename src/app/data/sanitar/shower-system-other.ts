import { RoomElement } from 'src/app/interfaces/room-element.interface';

export const showerSystemOther: RoomElement = {
  id: 'showerSystemOther',
  name: 'Duschsystem - Sonstiges',
  priceFor: 'item', //item, meter
  elementType: 'simple',
  levels: [
    {
      id: '1',
      level: 'mehrprice',
      image: 'assets/images/sanitaer/sanitaer_duschsystem-sonstiges_1.jpg',
      description: `Nische in der Wand (neben Dusche oder Waschbecken) als Ablage, aus gewählten Fliesen,<br>Abmessungen: Breite ca. 40 cm / Höhe ca. 30 cm / Tiefe ca. 10 cm`,
      extraPrice: 450,
      forSanitarGeneralChoices: true,
      variants: [],
    },
    {
      id: '2',
      level: 'mehrprice',
      image: 'assets/images/sanitaer/sanitaer_duschsystem-sonstiges_2.jpg',
      description: `Geflieste Duschtrennwand, in Trockenbauweise, Oberfläche aus gewählten Fliesen<br> Abmessungen: Breite ca. 100 cm / Höhe ca. 250 cm (raumhoch), Stärke ca. 15 cm (die Abmessungen können aufgrund der tatsächlichen Raumgestaltung abweichen)`,
      extraPrice: 1170,
      forSanitarGeneralChoices: true,
      variants: [],
    },
    {
      id: '3',
      level: 'mehrprice',
      image: 'assets/images/sanitaer/sanitaer_duschsystem-sonstiges_3_1.jpg',
      description: `Duschabtrennung aus Glas, ESG, transparent, inkl. Befestigungsprofile <br>Abmessungen: Breite ca. 100 cm / Höhe ca. 200 cm, (die Breite kann aufgrund der tatsächlichen Raumgestaltung abweichen)`,
      extraPrice: 1080,
      forSanitarGeneralChoices: true,
      variants: [
        {
          id: '1',
          image: 'assets/images/sanitaer/sanitaer_duschsystem-sonstiges_3_1.jpg',
          description: ``,
          code: '',
        },
        {
          id: '2',
          image: 'assets/images/sanitaer/sanitaer_duschsystem-sonstiges_3_2.jpg',
          description: ``,
          code: '',
        },
      ],
    },
  ],
};
