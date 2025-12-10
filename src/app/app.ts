import { Component, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Form } from "./form/form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule, CommonModule, Form],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('App');
  lists: string[] = [];

  addnames(names:string){
    this.lists.push(names);

    console.log('Names received from Dashboard:', names);
  }
}
