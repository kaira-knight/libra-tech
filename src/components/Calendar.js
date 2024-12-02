// File: src/components/Calendar.js

import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = ({ onDateSelect }) => {
  const handleDateClick = (info) => {
    onDateSelect(info.dateStr);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        selectable={true}
      />
    </div>
  );
};

export default Calendar;
