// Libraries 
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

class Calendar extends React.PureComponent {
    render () {
        return (
            <div className="CalendarDashboard">
                <div className="Calendar">
                    <FullCalendar
                        timeZone={"UTC"}
                        defaultView="dayGridMonth"
                        allDaySlot={false}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        droppable={true}
                        contentHeight={575}
                        themeSystem="bootstrap"
                        header = {{
                            left: "today, prev,next",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay"
                        }}
                        handleWindowResize={true}
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        eventDurationEditable={true}
                    />
                </div>
                
            </div>
        )
    }
}

export default Calendar;