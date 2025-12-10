import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Highlight } from '../highlight';
import { ɵEmptyOutletComponent, RouterLinkWithHref } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [CommonModule, Highlight, ɵEmptyOutletComponent, CommonModule, FormsModule, NgOptimizedImage, RouterLinkWithHref],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

 @Input() names: string[] = ["Alice", "Bob", "Charlie"];

Show: boolean=false ;
color: string='';

a:string='';


}
