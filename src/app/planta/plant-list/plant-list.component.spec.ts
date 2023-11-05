/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { of } from 'rxjs';

import { PlantListComponent } from './plant-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;
  let plantaService: PlantaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantListComponent],
      providers: [PlantaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    plantaService = TestBed.inject(PlantaService);

    // Crear un arreglo de 3 plantas falsas utilizando la clase Planta.
    const plantasFalsas: Planta[] = Array.from({ length: 3 }, () => new Planta(
      faker.datatype.number(), // id: number
      faker.commerce.productName(), // nombre_comun: string
      faker.random.words(2).split(' ').map((w, i) => i === 0 ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : w.toLowerCase()).join(' '), // nombre_cientifico: string
      faker.commerce.productMaterial(), // tipo: string
      faker.datatype.number({ min: 1, max: 10 }), // altura_maxima: number
      faker.address.country(), // clima: string
      faker.commerce.product() // sustrato_siembra: string
    ));
  
    // Espiar el servicio y devolver los datos falsos
    spyOn(plantaService, 'getPlantas').and.returnValue(of(plantasFalsas));
  
    fixture.detectChanges(); // detectar los cambios y cargar las plantas
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Nueva prueba para verificar la creación de la tabla con las filas correctas
  it('debe crear una tabla con tres filas de plantas más el encabezado', () => {
    // Forzar la detección de cambios para que la vista se actualice
    fixture.detectChanges();

    // Seleccionar todas las filas de la tabla en el DOM
    const rows = debug.queryAll(By.css('table tr'));

    // Ajustar este valor según la estructura de tu tabla
    expect(rows.length).toBe(4); // 3 filas de plantas + 1 fila de encabezado

    // Verificar que el servicio ha sido llamado
    expect(plantaService.getPlantas).toHaveBeenCalled();
  });
});