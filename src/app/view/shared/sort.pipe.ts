import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(array: any, field: string, direction?: 'asc' | 'desc'): any[] {
    if (!Array.isArray(array)) {
      return [];
    }
    if (!direction) {
      return array.sort((a: any, b: any) => (b[field] > a[field] ? -1 : 1));
    } else {
      if (direction === 'desc') {
        return array.sort((a: any, b: any) => (b[field] > a[field] ? 1 : -1));
      } else {
        return array.sort((a: any, b: any) => (b[field] > a[field] ? -1 : 1));
      }
    }
  }
}
