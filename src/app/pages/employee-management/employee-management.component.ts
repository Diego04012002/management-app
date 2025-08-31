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
      path:"/main/empleados/create",
      label:"Crear Empleado",
      class:"bg-gradient-to-l from-blue-400 to-cyan-500",
      image:''
    },
    {
      path:"/main/empleados/list",
      label:"Lista de Empleados",
      class:"bg-gradient-to-r from-blue-500 to-cyan-400",
      image:''
    }
  ]

}
