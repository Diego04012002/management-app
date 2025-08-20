import { Component } from '@angular/core';

@Component({
  selector: 'app-invitation-management',
  templateUrl: './invitation-management.component.html'
})
export class InvitationManagementComponent {
  invitations = [
    {
      guestName: 'Dr. Fernando Castillo',
      guestEmail: 'fernando.castillo@consultor.com',
      status: 'confirmed',
      sentAt: '15/01/2024 10:30',
    },
    {
      guestName: 'Ing. Patricia Vega',
      guestEmail: 'patricia.vega@proveedor.com',
      status: 'pending',
      sentAt: '14/01/2024 16:45',
    },
  ];

  getStatusBadgeClass(status: string) {
    return status === 'confirmed'
      ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
      : 'bg-amber-500/20 text-amber-300 border-amber-500/30';
  }

  getStatusText(status: string) {
    return status === 'confirmed' ? 'Confirmado' : 'Pendiente';
  }
}
