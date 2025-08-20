import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from '../../shared/components/tabs/tabs.component';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  imports: [RouterOutlet, TabsComponent],
})
export class EmployeeManagementComponent {

  tabs=[
    {
      path:"empleados/create",
      label:"Crear Empleado",
      class:"bg-gradient-to-r from-blue-600 to-cyan-600",
      image:"employee.svg"
    },
    {
      path:"empleados/list",
      label:"Lista de Empleados",
      class:"bg-gradient-to-r from-purple-600 to-pink-600",
      image:"employee.svg"
    }
  ]

}
