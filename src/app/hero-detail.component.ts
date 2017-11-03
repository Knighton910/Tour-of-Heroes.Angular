import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  styles: [`
    .me { 
      color: red;
      font-family: Blacksword, sans-serif;
    }
  `],
  template: `
    <div *ngIf="hero">
      <h2 class="me">{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})

export class HeroDetailComponent {
  @Input() hero: Hero;
}
