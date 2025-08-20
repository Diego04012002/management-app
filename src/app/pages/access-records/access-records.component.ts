import { Component } from "@angular/core"

@Component({
  selector: "app-access-records",
  templateUrl: "./access-records.component.html",
})
export class AccessRecordsComponent {
  records = [
    {
      id: "1",
      timestamp: "15/01/2024 09:00:00",
      name: "Juan Pérez",
      type: "employee",
      action: "check-in",
    },
    {
      id: "2",
      timestamp: "15/01/2024 08:30:00",
      name: "Ana Martínez",
      type: "employee",
      action: "check-in",
    },
    {
      id: "3",
      timestamp: "14/01/2024 17:45:00",
      name: "Dr. Fernando Castillo",
      type: "guest",
      action: "check-in",
    },
    {
      id: "4",
      timestamp: "14/01/2024 17:30:00",
      name: "María García",
      type: "employee",
      action: "check-out",
    },
  ]

  getTypeBadgeClass(type: string) {
    return type === "employee"
      ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
      : "bg-purple-500/20 text-purple-300 border-purple-500/30"
  }

  getTypeText(type: string) {
    return type === "employee" ? "Empleado" : "Invitado"
  }

  getActionBadgeClass(action: string) {
    return action === "check-in"
      ? "bg-green-500/20 text-green-300 border-green-500/30"
      : "bg-red-500/20 text-red-300 border-red-500/30"
  }

  getActionText(action: string) {
    return action === "check-in" ? "Entrada" : "Salida"
  }
}
