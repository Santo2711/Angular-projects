import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, inject, InjectionToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from '../data';
import { ɵEmptyOutletComponent } from "@angular/router";

export interface AppConfig{
  apiUrl:string;
  version:string;
  features:Record<string,boolean>;
}

const Config=new InjectionToken<AppConfig>('app.config', {
  providedIn: 'root',
  factory:()=>({
    apiUrl:'https://api.example.com',
    version:'1.0.0',
    features:{
      Darkmode:true,
      analytics:false,
    }
    })
});

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule, ɵEmptyOutletComponent],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  config=inject(Config);
  data:string="";
  show:boolean=false;
  datas=inject(Data);

  name: string = "";
  @Output() nameslist=new EventEmitter<string>();

  addnames() {
    console.log("Name submitted: " + this.name);
    this.nameslist.emit(this.name);
    this.datas.add(this.name);
    this.name="";
    
  }


}
