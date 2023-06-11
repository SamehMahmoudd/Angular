import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardStyle'
})
export class CreditCardStylePipe implements PipeTransform {

  transform(value: string, ): string {
    const groups = value.match(/.{1,4}/g);

    return groups!.join('-');
  }

}
