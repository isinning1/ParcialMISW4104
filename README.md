# ParcialMISW4104

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli). Está diseñado para mostrar una lista de plantas en un vivero, siguiendo los requisitos de una evaluación de curso universitario.

## Descripción del Proyecto

La aplicación incluye las siguientes características:

- Un módulo de Plantas que permite la gestión de datos de plantas dentro del inventario de un vivero.
- Una clase `Planta` que encapsula todos los atributos necesarios para manejar los datos de las plantas.
- Un servicio `PlantaService` que obtiene los datos de las plantas desde una URL dada, utilizando métodos del cliente HTTP.
- Un componente `PlantListComponent` que presenta el nombre común, tipo y clima de las plantas en una tabla estilizada con Bootstrap.
- Funcionalidad adicional para mostrar el número total de plantas de interior y exterior disponibles en el vivero.
- Prueba del componente 

## Desarrollo

### Servidor de desarrollo

Ejecuta `ng serve` para levantar el servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos de origen.

### Ejecución de pruebas unitarias

Ejecuta `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io). Las pruebas incluyen la validación de la creación del componente, la correcta generación de la tabla de plantas y el cálculo de totales de plantas por tipo.

### Ajustes de Vistas

Se han realizado los siguientes ajustes en las vistas para cumplir con los requerimientos del proyecto:

- Adecuación de la tabla `PlantListComponent` para mostrar los datos de forma clara y precisa, siguiendo el diseño de la Figura 1 proporcionada en las instrucciones.
- Implementación de Bootstrap para estilizar la tabla y otros componentes de la UI para una mejor experiencia de usuario.
- Incorporación de lógica para el cálculo dinámico del total de plantas por tipo, reflejando los cambios en tiempo real conforme se actualiza la información del vivero.


### Más ayuda

Para obtener más ayuda sobre Angular CLI usa `ng help` o visita la página de [Visión General y Referencia de Comandos de Angular CLI](https://angular.io/cli).

## Contribuciones

Las contribuciones son bienvenidas, especialmente en las siguientes áreas:

- Ampliación de la cobertura de pruebas unitarias y de integración.
- Mejoras en la accesibilidad y responsividad del diseño de la UI.
- Optimización del rendimiento de la carga de datos y actualización de vistas.