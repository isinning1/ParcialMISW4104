import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  plantas: Array<Planta> = [];
  totalInterior: number = 0;
  totalExterior: number = 0;

  constructor(private plantaService: PlantaService) { }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.calcularTotales();
    });
  }

  calcularTotales(): void {
    this.totalInterior = this.plantas.filter(planta => planta.tipo === 'Interior').length;
    this.totalExterior = this.plantas.filter(planta => planta.tipo === 'Exterior').length;
  }

  ngOnInit() {
    this.getPlantas();
  }

}

