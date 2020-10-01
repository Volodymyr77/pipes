import { Component } from '@angular/core';
import {products} from "./dataFolder/data";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  products = products;

  termin = new Date().getTime();

}
