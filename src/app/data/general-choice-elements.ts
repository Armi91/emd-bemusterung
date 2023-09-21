export type GeneralChoiceElementId = 'floor' | 'walls' | 'windowsills' | 'doors' | 'doorHardware' | 'electricEquipment';
export type GeneralChoiceElement = {
    id: GeneralChoiceElementId;
    name: string;
}

export const generalChoiceElements: GeneralChoiceElement[] = [
    {
        id: 'floor',
        name: 'Bodenbelage',
    },
    {
        id: 'walls',
        name: 'Wände',
    },
    {
        id: 'windowsills',
        name: 'Fensterbank',
    },
    {
        id: 'doors',
        name: 'Innentür'
    },
    {
        id: 'doorHardware',
        name: 'Türbeschläge'
    }, 
    {
        id: 'electricEquipment',
        name: 'Elektrotechnik'
    }
]
