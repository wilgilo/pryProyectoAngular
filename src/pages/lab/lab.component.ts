import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lab.component.html',
  styleUrl: './lab.component.less'
})
export class LabComponent {
  title = 'laboratorio';
  name = 'Wilmer Giraldo L';
  tareas = [
    'Intalacion Angular',
    'Crear proyecto',
    'Crear componente',
    'Crear Servicio'
  ]

}
