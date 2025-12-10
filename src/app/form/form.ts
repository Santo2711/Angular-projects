import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, inject, InjectionToken, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from '../data';
import { ɵEmptyOutletComponent, RouterOutlet, RouterLink } from "@angular/router";
import { Highlight } from '../highlight';
import { Nav } from '../nav/nav';

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
  imports: [CommonModule,Highlight ,FormsModule, ɵEmptyOutletComponent, RouterOutlet,Nav,RouterLink],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  config=inject(Config);
  data:string="";
  show:boolean=false;
  datas=inject(Data);

   @Input() names: string[] = ["Alice", "Bob", "Charlie"];

Show: boolean=false ;
color: string='';

a:string='';


  name: string = "";
  @Output() nameslist=new EventEmitter<string>();

  addnames() {
    console.log("Name submitted: " + this.name);
    this.nameslist.emit(this.name);
    this.datas.add(this.name);
    this.name="";
    
  }


}
