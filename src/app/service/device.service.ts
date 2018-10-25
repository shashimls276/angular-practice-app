import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*import { Observable } from 'rxjs/Observable';*/

@Injectable()
export class DeviceService {

  constructor(private httpClient : HttpClient) { }

  getDevice(params : any){
      
    console.log(params);
   return this.httpClient.post("http://localhost:8080/devices",params)
  }


}
