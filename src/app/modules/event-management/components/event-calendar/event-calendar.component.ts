import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventInput } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { toSignal } from '@angular/core/rxjs-interop';
import { EventsService } from '../../services/events.service';
import { Event } from '../../../../interfaces/event.interface';

@Component({
  selector: 'app-event-calendar',
  imports: [FullCalendarModule],
  styleUrl: './event-calendar.component.css',
  templateUrl: './event-calendar.component.html',
})
export class EventCalendarComponent {
  eventsService = inject(EventsService);
  events = toSignal(this.eventsService.events);

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    editable: true,
    dateClick: (arg) => this.handleDateClick(arg),
  };
  eventsPromise!: Promise<EventInput[]>;

  handleDateClick(arg: DateClickArg) {
    console.log(arg.dateStr)
  }

  mapEvent(events: Event[]) {
    return events.map((event) => {
      return {
        title: event.name,
        date: event.date,
      };
    });
  }

  change(){
    const algo={
      name: 'Presentación Anual',
      date: new Date('2025-08-04').toISOString().split('T')[0],
      description: 'Presentación de resultados anuales',
      location: 'Sala de Juntas',
      invitations: 8,
    }
    this.events()!.push(algo)
    this.eventsService.setEvents=this.events()!
  }
}
