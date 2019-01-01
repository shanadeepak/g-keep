import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Note } from '../model/note.model';

@Pipe({
 name: 'statusfilter'
})

@Injectable()
export class StatusFilterPipe implements PipeTransform {
 transform(items: Note[], field: string, value: string): Note[] {
   if (!items) {
       return [];
   }
   return items.filter(it => it[field] === value);
 }
}