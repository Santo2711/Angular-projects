import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data {
  names: string[] = [];

  add(name:string){
    this.names.push(name);
  }

  get(){
    return [...this.names];
  }
  
}
