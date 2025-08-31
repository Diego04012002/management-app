import { Component } from "@angular/core"
import { RegisterListComponent } from "../../modules/access-record/components/register-list/register-list.component";

@Component({
  selector: "app-access-records",
  templateUrl: "./access-records.component.html",
  imports: [RegisterListComponent],
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
}
