import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trie'
})
export class TriePipe implements PipeTransform {

  transform(tab: String[]): String [] {

    return tab.filter((a:String)=> a.toLowerCase().includes("m"));
  }

}
