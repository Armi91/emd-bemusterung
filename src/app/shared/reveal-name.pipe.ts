import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revealName',
})
export class RevealNamePipe implements PipeTransform {
  transform(shorthand: string, ...args: unknown[]): string {
    switch (shorthand) {
      case 'white':
        return 'Weiß';
      case 'floorColor':
        return 'Bodenfarbe';
      case 'other':
        return 'Andere';
      case 'item':
        return 'przedmiot';
      case 'meter':
        return 'm<sup>2</sup>';
      case 'parallel':
        return 'Parallel';
      case 'perpendicular':
        return 'Orthogonal';
      case 'floor':
        return 'Bodenbelage';
      case 'walls':
        return 'Wände';
      case 'windowsills':
        return 'Fensterbank';
      case 'doors':
        return 'Innentür';
      case 'doorHardware':
        return 'Türbeschläge';
      case 'electricEquipment':
        return 'Elektrotechnik';
      case 'sink':
        return 'Waschbecken';
      case 'sinkFaucet':
        return 'Waschbeckenarmatur';
      case 'toilet':
        return 'Tiefspül-WC';
      case 'flushPlate':
        return 'Betätigungsplatte';
      case 'showerSystemFitting':
        return 'Duschsystem - Armatur';
      case 'showerSystemDrain':
        return 'Duschsystem - Ablauf';
      case 'showerSystemOther':
        return 'Duschsystem - Sonstiges';
      default:
        return shorthand;
    }
  }
}
