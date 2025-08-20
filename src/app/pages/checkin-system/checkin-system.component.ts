import { Component } from '@angular/core';

@Component({
  selector: 'app-checkin-system',
  templateUrl: './checkin-system.component.html',
})
export class CheckInSystemComponent {
  employees = [
    {
      id: '1',
      name: 'Juan Pérez',
      department: 'Desarrollo',
      position: 'Desarrollador Senior',
      lastAction: 'check-out',
      lastTime: '14/01/2024 17:30',
      status: 'out',
      initials: 'JP',
    },
    {
      id: '2',
      name: 'María García',
      department: 'Marketing',
      position: 'Gerente de Marketing',
      lastAction: 'check-in',
      lastTime: '15/01/2024 08:45',
      status: 'in',
      initials: 'MG',
    },
    {
      id: '3',
      name: 'Carlos López',
      department: 'Desarrollo',
      position: 'Desarrollador Frontend',
      lastAction: 'check-in',
      lastTime: '15/01/2024 09:15',
      status: 'in',
      initials: 'CL',
    },
    {
      id: '4',
      name: 'Laura Rodríguez',
      department: 'Ventas',
      position: 'Ejecutiva de Ventas',
      lastAction: 'check-out',
      lastTime: '14/01/2024 18:00',
      status: 'out',
      initials: 'LR',
    },
    {
      id: '5',
      name: 'Miguel Torres',
      department: 'Finanzas',
      position: 'Contador',
      lastAction: null,
      lastTime: 'Nunca',
      status: 'never',
      initials: 'MT',
    },
    {
      id: '6',
      name: 'Sofia Herrera',
      department: 'Recursos Humanos',
      position: 'Coordinadora de RRHH',
      lastAction: 'check-in',
      lastTime: '15/01/2024 08:00',
      status: 'in',
      initials: 'SH',
    },
    {
      id: '7',
      name: 'Diego Morales',
      department: 'Operaciones',
      position: 'Supervisor de Operaciones',
      lastAction: 'check-out',
      lastTime: '14/01/2024 16:45',
      status: 'out',
      initials: 'DM',
    },
    {
      id: '8',
      name: 'Carmen Jiménez',
      department: 'Marketing',
      position: 'Especialista en Marketing Digital',
      lastAction: 'check-out',
      lastTime: '13/01/2024 17:15',
      status: 'out',
      initials: 'CJ',
    },
  ];

  getEmployeesInOffice() {
    return this.employees.filter((emp) => emp.status === 'in').length;
  }

  getEmployeesOutOffice() {
    return this.employees.filter((emp) => emp.status === 'out').length;
  }

  getEmployeesNoRecord() {
    return this.employees.filter((emp) => emp.status === 'never').length;
  }

  getStatusBadgeClass(status: string) {
    if (status === 'never') {
      return 'bg-slate-500/20 text-slate-300 border-slate-400/30';
    }
    if (status === 'in') {
      return 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30';
    }
    return 'bg-red-500/20 text-red-300 border-red-400/30';
  }

  getStatusText(status: string) {
    if (status === 'never') return 'Sin registro';
    if (status === 'in') return 'En oficina';
    return 'Fuera de oficina';
  }

  getActionButtonClass(status: string) {
    if (status === 'in') {
      return 'bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700';
    }
    return 'bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700';
  }

  getActionText(status: string) {
    return status === 'in' ? 'Check-Out' : 'Check-In';
  }
}
