import { Component, OnInit } from '@angular/core';
import { Planta} from '../planta';
@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  plantas: Array<Planta> = [];
  constructor() { }

 ngOnInit() {
 }
}
