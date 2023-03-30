import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MyListModule } from './components/my-list/my-list.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MyListModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>

    <my-list [items]="users">
      <div *listItemDef="let user">{{user.something}}</div>
    </my-list>
  `,
})
export class App {
  name = 'Angular';
  users = [
    { something: 'User 1' },
    { something: 'User 2' },
    { something: 'User 3' },
  ];
}

bootstrapApplication(App);
