import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Highlight } from '../highlight';
import { ɵEmptyOutletComponent, RouterLinkWithHref, RouterOutlet } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { Nav } from "../nav/nav";

@Component({
  selector: 'app-header',
  imports: [CommonModule, Highlight, ɵEmptyOutletComponent, CommonModule, FormsModule, NgOptimizedImage, RouterLinkWithHref, Nav, RouterOutlet],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {



}
