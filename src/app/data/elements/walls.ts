import { RoomElement } from "src/app/interfaces/room-element.interface";

export const walls: RoomElement = {
    id: 'walls',
    name: 'Wände',
    priceFor: 'meter',
    elementType: 'wall',
    notApplicable: false,
    levels: [
        {
            id: 'microzement',
            level: 'mehrprice',
            extraPrice: 155,
            forGeneralChoices: false,
            image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_1.jpg',
            description: `Mikrozement, Muster / Farbton nach Wahl, Schichtstärke insgesamt ca. 4mm, ohne Sockelleisten (nur dauerelastische Verfugung) Oberflächenbeschichtung Standard matt`,
            variants: [
                {
                    id: '1',
                    description: `Grey 2`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_1.jpg'
                },
                {
                    id: '2',
                    description: `Grey 3`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_2.jpg'
                },
                {
                    id: '3',
                    description: `Grey 4`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_3.jpg'
                },
                {
                    id: '4',
                    description: `Grey 5`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_4.jpg'
                },
                {
                    id: '5',
                    description: `Grey 6`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_5.jpg'
                },
                {
                    id: '6',
                    description: `Grey 7`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_6.jpg'
                },
                {
                    id: '7',
                    description: `Grey 8`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_7.jpg'
                },
                {
                    id: '8',
                    description: `Signal White`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_8.jpg'
                },
                {
                    id: '9',
                    description: `Grey White`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_9.jpg'
                },
                {
                    id: '10',
                    description: `Light Grey`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_10.jpg'
                },
                {
                    id: '11',
                    description: `Stone Grey`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_11.jpg'
                },
                {
                    id: '12',
                    description: `Iron Grey`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_12.jpg'
                },
                {
                    id: '13',
                    description: `Silk Grey`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_13.jpg'
                },
                {
                    id: '14',
                    description: `Pebble Grey`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_14.jpg'
                },
                {
                    id: '15',
                    description: `Classic Beige`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_15.jpg'
                },
                {
                    id: '16',
                    description: `July go Beige`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_16.jpg'
                },
                {
                    id: '17',
                    description: `Warm go Beige`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_17.jpg'
                },
                {
                    id: '18',
                    description: `Taupe Beige`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_18.jpg'
                },
                {
                    id: '19',
                    description: `Pastel Rose`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_19.jpg'
                },
                {
                    id: '20',
                    description: `Blue Sky`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_20.jpg'
                },
                {
                    id: '21',
                    description: `Teatree`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_21.jpg'
                },
                {
                    id: '22',
                    description: `Cool Rose`,
                    image: 'assets/images/items/floor/Bodenbelaege_Microcement_2_4_1_22.jpg'
                }
            ],
            title: 'Microzement'
        },
        {
            id: 'tiles',
            level: 'mehrprice',
            extraPrice: 110,
            forGeneralChoices: false,
            image: 'assets/images/items/floor/Bodenbelaege_Fliesen_2_3_1.jpg',
            description: `Fliesen bis 60 cm x 60 cm, Stärke ca. 10mm, Bemusterung aus zwei Linien: Serie 1: Romagna oder Serie 2 Umbrien (jeweils drei/vier Muster pro Linie) Linien untereinander nicht kombinierbar ohne Sockelleisten (nur dauerelastische Verfugung), ausgenommen Badezimmer - dort mit Sockelleisten`,
            variants: [
                {
                    id: '1',
                    description: `Romagna Anthrazit `,
                    image: 'assets/images/items/floor/Bodenbelaege_Fliesen_2_3_1.jpg'
                },
                {
                    id: '2',
                    description: `Romagna Hellgrau`,
                    image: 'assets/images/items/floor/Bodenbelaege_Fliesen_2_3_2.jpg'
                },
                {
                    id: '3',
                    description: `Romagna Grau`,
                    image: 'assets/images/items/floor/Bodenbelaege_Fliesen_2_3_3.jpg'
                },
                {
                    id: '4',
                    description: `Romagna Mittelgrau`,
                    image: 'assets/images/items/floor/Bodenbelaege_Fliesen_2_3_4.jpg'
                },
                {
                    id: '5',
                    description: `Umbrien Khaki`,
                    image: 'assets/images/items/floor/Bodenbelaege_Fliesen_2_3_5.jpg'
                },
                {
                    id: '6',
                    description: `Umbrien Silver`,
                    image: 'assets/images/items/floor/Bodenbelaege_Fliesen_2_3_6.jpg'
                },
                {
                    id: '7',
                    description: `Umbrien Snow`,
                    image: 'assets/images/items/floor/Bodenbelaege_Fliesen_2_3_7.jpg'
                },
            ],
            title: 'Zusätzliche Fliesenoberfläche'
        },
        {
            id: 'stucco',
            level: 'mehrprice',
            forGeneralChoices: false,
            extraPrice: 160,
            image: 'assets/images/items/walls/Oberflaeche_Stiuk_2_4_3_1.jpg',
            description: `Wandoberfläche als Stucco Veneziano, mit Wachs versiegelt, Auswahl nach Bemusterung`,
            variants: [
                {
                    id: '1',
                    description: `Romagna Stucco Veneziano farblos`,
                    image: 'assets/images/items/walls/Oberflaeche_Stiuk_2_4_3_1.jpg'
                },
                {
                    id: '2',
                    description: `Stucco Veneziano Almandyn`,
                    image: 'assets/images/items/walls/Oberflaeche_Stiuk_2_4_3_2.jpg'
                },
                {
                    id: '3',
                    description: `Stucco Veneziano Granit`,
                    image: 'assets/images/items/walls/Oberflaeche_Stiuk_2_4_3_3.jpg'
                },
                {
                    id: '4',
                    description: `Stucco Veneziano Perle`,
                    image: 'assets/images/items/walls/Oberflaeche_Stiuk_2_4_3_4.jpg'
                }
            ],
            title: 'Stucco Veneziano (Kalkputz mit Muster) - Wandoberfläche'
        },
        {
            id: 'acousticPanels',
            level: 'mehrprice',
            extraPrice: 230,
            forGeneralChoices: false,
            image: 'assets/images/items/walls/Akustik-Paneele aus Holzlamellen_2_4_4_1.jpg',
            description: `Oberfläche aus Akustik-Paneele mit senkrechten Holzlamellen (Material Fichte), Farbe natur<br>Abmessungen (HxB): 250cm x 62,5cm. Dicke 42mm`,
            variants: [
                {
                    id: '1',
                    description: ``,
                    image: 'assets/images/items/walls/Akustik-Paneele aus Holzlamellen_2_4_4_1.jpg'
                }
            ],
            title: 'Akustik-Paneele aus Holzlamellen'
        },
        {
            id: 'quartzSand',
            level: 'mehrprice',
            extraPrice: 15,
            image: 'assets/images/items/walls/Oberflaeche_quarzsand_2_4_5.jpg',
            description: `Zusätzliche Beschichtung der Wandoberfläche mit Quarzsandgrundierung (vor Malerarbeiten), Optik: rau mit Quarzsand-Körnung`,
            variants: [
                {
                    id: '1',
                    description: ``,
                    image: 'assets/images/items/walls/Oberflaeche_quarzsand_2_4_5.jpg'
                }
            ],
            title: 'Innenwand- Oberfläche mit Quarzsandstruktur'
        },
        {
            id: 'whitePaint',
            level: 'mehrprice',
            extraPrice: 0.5,
            forGeneralChoices: true,
            image: 'assets/images/items/walls/Oberflaeche_Farbe_2_4_6_1.png',
            description: `Alpinaweiss. ALPINAWEISS DAS ORIGINAL - WEISSE INNENFARBE Mit Spritz-Schutz-Formel: bis zu 100% spritzfrei streichen<br> Frei von Löse- und Konservierungsmitteln Perfekt für die Raumluft: emissionsarm und geruchsneutral<br> Scheuerbeständig, Nassabrieb Klasse 2 nach DIN EN 13 300<br> Gleichmäßige, streifenfreie Oberfläche<br> Farbton: Alpinaweiß, matt`,
            variants: [
            ],
            title: 'Innenwand- Oberfläche. Wandfabe Weiss'
        },
        {
            id: 'coloredPaint',
            level: 'mehrprice',
            extraPrice: 15,
            forGeneralChoices: true,
            image: '',
            description: `Änderung der Wandfarbe nach RAL. Bitte RAL angeben. Die Farbe wird in einer Farbmischanlage auf Basis von Alpina-Produkten gemischt<br>(nur gesamte Wände möglich).`,
            variants: [
            ],
            title: 'Änderung Wandfarbe',
            isTextVariant: true
        },
    ]
}