import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value:Array<any>, arg: string): any[] {
    const resultPosts = [];
    for(const post of value){
      console.log('🔴🔴', post)
      if (post.descripcion.toLowerCase( ).indexOf(arg.toLowerCase( )) > -1 ){
        resultPosts.push(post);        
      }
    }
    return resultPosts;
  }


}
