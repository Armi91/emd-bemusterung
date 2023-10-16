import { RoomElement } from 'src/app/interfaces/room-element.interface';

export const floor: RoomElement = {
  id: 'floor',
  name: 'Bodenbelaege',
  priceFor: 'meter',
  elementType: 'simple',
  notApplicable: false,
  levels: [
    {
      id: 'vinylboden_1',
      title: 'Vinylboden',
      level: 'standard',
      extraPrice: 0,
      description:
        'Vinylboden schwimmend verlegt, inkl. Schalldämmmate als UnterlagePlatineiche/Lumber/Normanneicheinkl. Sockelleiste weiß aus MDF<br>Standard in der gesamten Wohnung (ausgenommen Badezimmer)',
      image: 'assets/images/items/floor/Bodenbelaege_Vinylboden_2_1_1_1.jpg',
      forGeneralChoices: true,
      variants: [
        {
          id: '1',
          image:
            'assets/images/items/floor/Bodenbelaege_Vinylboden_2_1_1_1.jpg',
          description: ``,
        },
        {
          id: '2',
          image:
            'assets/images/items/floor/Bodenbelaege_Vinylboden_2_1_1_2.jpg',
          description: ``,
        },
        {
          id: '3',
          image:
            'assets/images/items/floor/Bodenbelaege_Vinylboden_2_1_1_3.jpg',
          description: ``,
        },
      ],
    },
    {
      id: 'parkett_2',
      title: 'Parkett',
      level: 'mehrprice',
      image: 'assets/images/items/floor/Bodenbelaege_Parkett_2_2_2_2.jpg',
      description: '',
      extraPrice: 0,
      forGeneralChoices: true,
      variants: [
        {
          id: '1',
          extraPrice: 35,
          image: 'assets/images/items/floor/Bodenbelaege_Parkett_2_2_2_1.JPG',
          description: `Parkett Eiche rustikal, natur, geölt, als Schichtparkett, Dielenbreite ca. 150 mm / Dielenstärke 14 mminkl. Sockelleiste weiß aus MDF`,
        },
        {
          id: '2',
          extraPrice: 50,
          image: 'assets/images/items/floor/Bodenbelaege_Parkett_2_2_2_2.jpg',
          description: `Parkett Eiche rustikal, hell, geölt, als Schichtparkett, Dielenbreite ca. 150 mm / Dielenstärke 14 mminkl. Sockelleiste weiß aus MDF`,
        },
        {
          id: '3',
          extraPrice: 50,
          image: 'assets/images/items/floor/Bodenbelaege_Parkett_2_2_3_1.jpg',
          description: `Parkett nach Individualplanung Bemusterung und Festlegung vor Ort`,
        },
        {
          id: '4',
          extraPrice: 10,
          image: 'assets/images/items/floor/Bodenbelaege_Parkett_2_2_3_2.jpg',
          description: `Sockelleiste, Holzprofil passend zum Parkett, geölt`,
        },
      ],
    },
    {
      id: 'fliesen_3',
      title: 'Fliesen',
      description:
        'Fliesen bis 60 cm x 60 cm, Stärke ca. 10mm, Bemusterung aus zwei Linien: Serie 1: Romagna oder Serie 2 Umbrien (jeweils drei/vier Muster pro Linie) Linien untereinander nicht kombinierbar ohne Sockelleisten (nur dauerelastische Verfugung), ausgenommen Badezimmer - dort mit Sockelleisten',
      extraPrice: 0,
      level: 'standard',
      image: 'assets/images/items/floor/Bodenbelaege_Fliesen_2_3_1.jpg',
      forSanitarGeneralChoices: true,
      variants: [
        {
          id: '1',
          description: `Romagna Anthrazit`,
          image: 'assets/images/items/floor/Bodenbelaege_Fliesen_2_3_1.jpg',
        },
        {
          id: '2',
          description: `Romagna Hellgrau`,
          image: 'assets/images/items/floor/Bodenbelaege_Fliesen_2_3_2.jpg',
        },
        {
          id: '3',
          description: `Romagna Grau`,
          image: 'assets/images/items/floor/Bodenbelaege_Fliesen_2_3_3.jpg',
        },
        {
          id: '4',
          description: `Romagna Mittelgrau`,
          image: 'assets/images/items/floor/Bodenbelaege_Fliesen_2_3_4.jpg',
        },
        {
          id: '5',
          description: `Umbrien Khaki`,
          image: 'assets/images/items/floor/Bodenbelaege_Fliesen_2_3_5.jpg',
        },
        {
          id: '6',
          description: `Umbrien Silver`,
          image: 'assets/images/items/floor/Bodenbelaege_Fliesen_2_3_6.jpg',
        },
        {
          id: '7',
          description: `Umbrien Snow`,
          image: 'assets/images/items/floor/Bodenbelaege_Fliesen_2_3_7.jpg',
        },
      ],
    },
    {
      id: 'microzement_4',
      title: 'Microzement',
      level: 'mehrprice',
      extraPrice: 155,
      description:
        'Mikrozement, Muster / Farbton nach Wahl, Schichtstärke insgesamt ca. 4mm, ohne Sockelleisten (nur dauerelastische Verfugung) Oberflächenbeschichtung Standard matt',
      image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_1.jpg',
      forSanitarGeneralChoices: true,
      variants: [
        {
          id: '1',
          description: `Grey 2`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_1.jpg',
        },
        {
          id: '2',
          description: `Grey 3`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_2.jpg',
        },
        {
          id: '3',
          description: `Grey 4`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_3.jpg',
        },
        {
          id: '4',
          description: `Grey 5`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_4.jpg',
        },
        {
          id: '5',
          description: `Grey 6`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_5.jpg',
        },
        {
          id: '6',
          description: `Grey 7`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_6.jpg',
        },
        {
          id: '7',
          description: `Grey 8`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_7.jpg',
        },
        {
          id: '8',
          description: `Signal White`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_8.jpg',
        },
        {
          id: '9',
          description: `Grey White`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_9.jpg',
        },
        {
          id: '10',
          description: `Light Grey`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_10.jpg',
        },
        {
          id: '11',
          description: `Stone Grey`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_11.jpg',
        },
        {
          id: '12',
          description: `Iron Grey`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_12.jpg',
        },
        {
          id: '13',
          description: `Silk Grey`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_13.jpg',
        },
        {
          id: '14',
          description: `Pebble Grey`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_14.jpg',
        },
        {
          id: '15',
          description: `Classic Beige`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_15.jpg',
        },
        {
          id: '16',
          description: `July go Beige`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_16.jpg',
        },
        {
          id: '17',
          description: `Warm go Beige`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_17.jpg',
        },
        {
          id: '18',
          description: `Taupe Beige`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_18.jpg',
        },
        {
          id: '19',
          description: `Pastel Rose`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_19.jpg',
        },
        {
          id: '20',
          description: `Blue Sky`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_20.jpg',
        },
        {
          id: '21',
          description: `Teatree`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_21.jpg',
        },
        {
          id: '22',
          description: `Cool Rose`,
          image:
            'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_22.jpg',
        },
      ],
    },
  ],
};
