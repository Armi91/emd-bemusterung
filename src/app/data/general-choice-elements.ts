export type GeneralChoiceElementId =
  | 'floor'
  | 'walls'
  | 'windowsills'
  | 'doors'
  | 'doorHardware'
  | 'electricEquipment';
export type GeneralChoiceSanitarElementId =
  | 'floor'
  | 'walls'
  | 'flushPlate'
  | 'sink'
  | 'toilet'
  | 'showerSystemDrain'
  | 'showerSystemFitting'
  | 'showerSystemOther'
  | 'sinkFaucet';

export type GeneralChoiceElement = {
  name: string;
  choices: Array<{
    id: GeneralChoiceElementId;
    name: string;
  }>;
};

export type GeneralChoiceSanitarElement = {
  name: string;
  choices: Array<{
    id: GeneralChoiceSanitarElementId;
    name: string;
  }>;
};

export const generalChoiceElements: GeneralChoiceElement[] = [
  {
    name: 'Bodenbelage',
    choices: [
      {
        id: 'floor',
        name: 'Bodenbelage',
      },
    ],
  },
  {
    name: 'Wände',
    choices: [
      {
        id: 'walls',
        name: 'Wände',
      },
    ],
  },
  {
    name: 'Fensterbank',
    choices: [
      {
        id: 'windowsills',
        name: 'Fensterbank',
      },
    ],
  },
  {
    name: 'Innentür',
    choices: [
      {
        id: 'doors',
        name: 'Innentür',
      },
      {
        id: 'doorHardware',
        name: 'Türbeschläge',
      },
    ],
  },
  {
    name: 'Elektrotechnik',
    choices: [
      {
        id: 'electricEquipment',
        name: 'Elektrotechnik',
      },
    ],
  },
];

export const generalChoiceSanitarElements: GeneralChoiceSanitarElement[] = [
  {
    name: 'Bodenbelage',
    choices: [
      {
        id: 'floor',
        name: 'Bodenbelage',
      },
    ],
  },
  {
    name: 'Wände',
    choices: [
      {
        id: 'walls',
        name: 'Wände',
      },
    ],
  },
  //   {
  //     name: '',
  //     choices: [
  //       {
  //         id: 'windowsills',
  //         name: 'Fensterbank',
  //       },
  //     ],
  //   },
  //   {
  //     name: '',
  //     choices: [
  //       {
  //         id: 'doors',
  //         name: 'Innentür',
  //       },
  //     ],
  //   },
  //   {
  //     name: '',
  //     choices: [
  //       {
  //         id: 'doorHardware',
  //         name: 'Türbeschläge',
  //       },
  //     ],
  //   },
  //   {
  //     name: '',
  //     choices: [
  //       {
  //         id: 'electricEquipment',
  //         name: 'Elektrotechnik',
  //       },
  //     ],
  //   },
  {
    name: 'Waschbecken',
    choices: [
      {
        id: 'sink',
        name: 'Waschbecken',
      },
      {
        id: 'sinkFaucet',
        name: 'Waschbeckenarmatur',
      },
    ],
  },
  {
    name: 'WC Anlagen',
    choices: [
      {
        id: 'toilet',
        name: 'Tiefspül-WC',
      },
      {
        id: 'flushPlate',
        name: 'Betätigungsplatte',
      },
    ],
  },
  {
    name: 'Dusche',
    choices: [
      {
        id: 'showerSystemFitting',
        name: 'Duschsystem - Armatur',
      },
      {
        id: 'showerSystemDrain',
        name: 'Duschsystem - Ablauf',
      },
      {
        id: 'showerSystemOther',
        name: 'Duschsystem - Sonstiges',
      },
    ],
  },
];
