import { Component, input } from '@angular/core';
import { Record } from '../../../../interfaces/record.interface';

@Component({
  selector: 'app-register-list',
  imports: [],
  templateUrl: './register-list.component.html',
})
export class RegisterListComponent {

  records=input.required<Record[]>()

  getTypeBadgeClass(type: string) {
    return type === 'employee'
      ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
      : 'bg-purple-500/20 text-purple-300 border-purple-500/30';
  }

  getTypeText(type: string) {
    return type === 'employee' ? 'Empleado' : 'Invitado';
  }

  getActionBadgeClass(action: string) {
    return action === 'check-in'
      ? 'bg-green-500/20 text-green-300 border-green-500/30'
      : 'bg-red-500/20 text-red-300 border-red-500/30';
  }

  getActionText(action: string) {
    return action === 'check-in' ? 'Entrada' : 'Salida';
  }
}
