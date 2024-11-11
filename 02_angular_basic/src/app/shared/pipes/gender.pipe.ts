import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'gender',
    standalone: true
})
export class GenderPipe implements PipeTransform{

    transform(value:number):string{
        switch(value){
            case 1: return 'Male';
            case 2: return 'Female';
            case 3: return 'Not disclosed';
            default: return '';
        }
    }
}