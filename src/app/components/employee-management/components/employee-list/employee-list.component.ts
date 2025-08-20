import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent {
  employees = [
    {
      name: 'Juan Pérez',
      email: 'juan.perez@empresa.com',
      department: 'Desarrollo',
      position: 'Desarrollador Senior',
      role: 'employee',
      status: 'active',
      lastCheckIn: '15/01/2024 09:00',
      initials: 'JP',
    },
    {
      name: 'María García',
      email: 'maria.garcia@empresa.com',
      department: 'Marketing',
      position: 'Gerente de Marketing',
      role: 'employee',
      status: 'active',
      lastCheckIn: 'Nunca',
      initials: 'MG',
    },
    {
      name: 'Ana Martínez',
      email: 'ana.martinez@empresa.com',
      department: 'Recursos Humanos',
      position: 'Gerente de RRHH',
      role: 'admin',
      status: 'active',
      lastCheckIn: '15/01/2024 08:30',
      initials: 'AM',
    },
    {
      name: 'Carlos López',
      email: 'carlos.lopez@empresa.com',
      department: 'Desarrollo',
      position: 'Desarrollador Frontend',
      role: 'employee',
      status: 'active',
      lastCheckIn: '15/01/2024 09:15',
      initials: 'CL',
    },
    {
      name: 'Laura Rodríguez',
      email: 'laura.rodriguez@empresa.com',
      department: 'Ventas',
      position: 'Ejecutiva de Ventas',
      role: 'employee',
      status: 'active',
      lastCheckIn: '14/01/2024 18:00',
      initials: 'LR',
    },
  ];

  getRoleBadgeClass(role: string) {
    return role === 'admin'
      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white border-0'
      : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0';
  }

  getRoleText(role: string) {
    return role === 'admin' ? 'Admin' : 'Empleado';
  }

  getStatusBadgeClass(status: string) {
    return status === 'active'
      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0'
      : 'bg-gradient-to-r from-gray-500 to-slate-500 text-white border-0';
  }

  getStatusText(status: string) {
    return status === 'active' ? 'Activo' : 'Inactivo';
  }
}
