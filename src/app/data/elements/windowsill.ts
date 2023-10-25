import { RoomElement } from 'src/app/interfaces/room-element.interface';

export const windowsills: RoomElement = {
  id: 'windowsill',
  name: 'Fensterbank',
  priceFor: 'meter',
  elementType: 'simple',
  notApplicable: false,
  levels: [
    {
      id: '1',
      level: 'standard',
      image: 'assets/images/items/windowsill/Fensterbrett_5_5_1.jpg',
      description: `Verspachtelt, breite 8cm`,
      extraPrice: 0,
      forGeneralChoices: true,
      forSanitarGeneralChoices: true,
      variants: [],
    },
    {
      id: '2',
      level: 'mehrprice',
      image: 'assets/images/items/windowsill/Fensterbrett_5_5_2_1.jpg',
      description: `Fensterbank Innen aus:<br>- Holz, Eiche, natur geölt, Überstand vorne 3cm. Dicke 25mm<br>- Holz - Eiche weiß gebeizt, keilgezinkt, Überstand vorne 3cm. Dicke 25mm`,
      extraPrice: 100,
      forGeneralChoices: true,
      forSanitarGeneralChoices: true,
      variants: [
        {
          id: '1',
          image: 'assets/images/items/windowsill/Fensterbrett_5_5_2_1.jpg',
          description: ``,
          code: ''
        },
        {
          id: '2',
          image: 'assets/images/items/windowsill/Fensterbrett_5_5_2_2.jpg',
          description: ``,
          code: ''
        },
      ],
    },
    {
      id: '3',
      level: 'mehrprice',
      image: 'assets/images/items/windowsill/Fensterbrett_5_5_3_1.jpg',
      description: `- Innenfensterbänke aus MDF ( oberfl. folie). Dicke 25-30mm,gerade Ecken`,
      extraPrice: 0,
      forGeneralChoices: true,
      forSanitarGeneralChoices: true,
      variants: [
        {
          id: '1',
          image: 'assets/images/items/windowsill/Fensterbrett_5_5_3_1.jpg',
          description: ``,
          code: ''
        },
        {
          id: '2',
          image: 'assets/images/items/windowsill/Fensterbrett_5_5_3_2.jpg',
          description: ``,
          code: ''
        },
        {
          id: '3',
          image: 'assets/images/items/windowsill/Fensterbrett_5_5_3_3.jpg',
          description: ``,
          code: ''
        },
        {
          id: '4',
          image: 'assets/images/items/windowsill/Fensterbrett_5_5_3_4.jpg',
          description: ``,
          code: ''
        },
      ],
    },
    {
      id: '4',
      level: 'mehrprice',
      image: 'assets/images/items/windowsill/Fensterbrett_5_5_4_1.png',
      description: `Innenfensterbänke aus MDF ( oberfl. lakiert). Dicke 20-25mm, gerade Ecken.`,
      extraPrice: 0,
      forGeneralChoices: true,
      forSanitarGeneralChoices: true,
      variants: [
        {
          id: '1',
          image: 'assets/images/items/windowsill/Fensterbrett_5_5_4_1.png',
          description: ``,
          code: ''
        },
        {
          id: '2',
          image: 'assets/images/items/windowsill/Fensterbrett_5_5_4_2.png',
          description: ``,
          code: ''
        },
        {
          id: '3',
          image: 'assets/images/items/windowsill/Fensterbrett_5_5_4_3.png',
          description: ``,
          code: ''
        },
      ],
    },
    {
      id: '5',
      level: 'mehrprice',
      image: 'assets/images/items/windowsill/Fensterbrett_5_5_5_1.jpg',
      description: `-Fensterbretter aus Aglomarmur . Dicke 30mm, gerade Ecken`,
      extraPrice: 0,
      forGeneralChoices: true,
      forSanitarGeneralChoices: true,
      variants: [
        {
          id: '1',
          image: 'assets/images/items/windowsill/Fensterbrett_5_5_5_1.jpg',
          description: ``,
          code: ''
        },
        {
          id: '2',
          image: 'assets/images/items/windowsill/Fensterbrett_5_5_5_2.png',
          description: ``,
          code: ''
        },
        {
          id: '3',
          image: 'assets/images/items/windowsill/Fensterbrett_5_5_5_3.jpg',
          description: ``,
          code: ''
        },
      ],
    },
  ],
};
