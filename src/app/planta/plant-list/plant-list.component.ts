import { Component, OnInit } from '@angular/core';
import { Planta} from '../planta';
import { PlantaService } from '../planta.service';


@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  plantas: Array<Planta> = [];
  
  constructor(private plantaService: PlantaService) { }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }
 
  ngOnInit() {
    this.getPlantas();
  }
 
 }
