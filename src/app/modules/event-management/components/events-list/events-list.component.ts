import { Component, inject } from '@angular/core';
import { EventCardComponent } from '../event-card/event-card.component';
import { Event } from '../../../../interfaces/event.interface';
import { EventsService } from '../../services/events.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-events-list',
  imports: [EventCardComponent],
  templateUrl: './events-list.component.html',
})
export class EventsListComponent {
  eventsService = inject(EventsService);
  events = toSignal(this.eventsService.events);
}
