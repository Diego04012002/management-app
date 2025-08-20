import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeManagementComponent } from "../../pages/employee-management/employee-management.component";

@Component({
  selector: 'app-employee-layout',
  imports: [EmployeeManagementComponent],
  templateUrl: './employee-layout.component.html',
})
export class EmployeeLayoutComponent { }
