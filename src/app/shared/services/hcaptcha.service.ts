// import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
// import {isPlatformBrowser} from '@angular/common'
// import { environment } from 'src/environments/environment';
// @Injectable({
//   providedIn: 'root'
// })
// export class HcaptchaService {
//   private readonly URL = environment.api;

//   public isBrowser  = false;
 
//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {
//     if (isPlatformBrowser(platformId)) {
//       this.isBrowser = true;
//     }
//   }
 
//   getToken(token: string): string {
//     if  (this.isBrowser == true){
//       const xhr = new XMLHttpRequest();
//       xhr.open('POST', 'urldestino' + token, false);
//       xhr.send();
//       const aux = JSON.parse(xhr.responseText);
//       return  xhr.responseText ;
//     } else {
//       return 'false'
//     }
//   }
 
// }