import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'upper'
})
export class UppercasePipe implements PipeTransform {

    transform(value: string): string {
        if (value) {
            const tranformedValue = value.toUpperCase();
            return tranformedValue;
        }
    }

}
