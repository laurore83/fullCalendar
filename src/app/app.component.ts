import { Component, LOCALE_ID, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, {
  DateClickArg,
  Draggable,
} from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: 'FULLCALENDAR_LOCALE', useValue: 'fr' }, // Fournir la locale française
    // Autres providers...
  ],
})
export class AppComponent {
  calendarOptions: CalendarOptions = {
    firstDay: 1,
    locale: 'fr',
    initialView: 'dayGridMonth', // Initial view should be a single value
    plugins: [dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay', // Add your desired views here
    },
    views: {
      dayGridMonth: {
        // Custom view for list day
        type: 'dayGridMonth',
        duration: { month: 1 },
        buttonText: 'Mois',
      },
      timeGridWeek: {
        // Custom view for time grid week
        type: 'timeGridWeek',
        duration: { weeks: 1 },
        buttonText: 'Semaine',
      },
      timeGridDay: {
        // Custom view for time grid day
        type: 'timeGridDay',
        duration: { days: 1 },
        buttonText: 'Jour',
      },
    },
    dateClick: (arg: DateClickArg) => this.handleDateClick(arg),
    events: [
      { title: 'event 1', date: '2024-06-01' },
      { title: 'event 2', date: '2024-06-02' },
    ],
    editable: true, // Allow events to be dragged and resized
    navLinks: true,
    buttonText: {
      today: "Aujourd'hui",
    },
  };

  handleDateClick(arg: DateClickArg) {
    const clickedDate = arg.dateStr;
    // this.calendarOptions.initialDate = clickedDate; // Set the initial date to the clicked date
    // this.calendarOptions.initialView = 'timeGridDay'; // Change the view to day view
    alert('date click! ' + arg.dateStr);
  }
  ngAfterViewInit() {
    const draggableEl = document.getElementById('draggable-el');

    if (draggableEl) {
      new Draggable(draggableEl, {
        eventData: {
          title: 'Draggable Event',
          duration: '02:00',
        },
      });
    }
  }
}
