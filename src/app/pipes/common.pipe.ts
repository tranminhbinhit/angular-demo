import { Pipe, PipeTransform } from '@angular/core';
import { getImageCdn } from '../utils/utils';

//{{ value | cdnUrl }}
@Pipe({name: 'cdnUrl'})
export class CdnUrlPipe implements PipeTransform {
  transform(value: string): string {
    let newStr: string = getImageCdn(value);
    return newStr;
  }
}

//{{ value | demoPipe:"Mr.":"handsome" }}
@Pipe({name: 'demoPipe'})
export class DemoPipe implements PipeTransform {
  transform(value: string, value1: string, value2: string): string {
    let newStr: string = value + value1 +  value2;
    return newStr;
  }
}
