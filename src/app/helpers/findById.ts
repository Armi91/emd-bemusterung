export function findById(arr: Array<any>, id: string): any {
    return arr.find((value: any) => value.id === id);
}

export function getIndexById(arr: Array<any>, id: string): number {
    return arr.findIndex((value: any) => value.id === id);
}