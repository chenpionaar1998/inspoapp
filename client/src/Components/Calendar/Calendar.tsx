// Libraries 
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

// Util
import { trimTimeString, getNextDate } from "../../utils/time"

type CalendarProps = {
    planStartDate: string;
    planEndDate: string;
    shouldDisplayCalendar: boolean;
    dateHighlighter: (cell: any) => void;
}

class Calendar extends React.PureComponent<CalendarProps> {
    CalendarRef: React.RefObject<FullCalendar> = React.createRef();

    render () {
        return (
            <div className="CalendarDashboard">
                <div className="Calendar">
                    {
                        this.props.shouldDisplayCalendar ?
                        <FullCalendar
                            ref={this.CalendarRef}
                            timeZone={"UTC"}
                            defaultView="dayGridMonth"
                            allDaySlot={false}
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            droppable={true}
                            contentHeight={575}
                            themeSystem="bootstrap"
                            header = {{
                                left: "today, prev, next",
                                center: "title",
                                right: "dayGridMonth,timeGridWeek,timeGridDay"
                            }}
                            handleWindowResize={true}
                            editable={true}
                            selectable={true}
                            selectMirror={true}
                            eventDurationEditable={true}
                            defaultDate={this.props.planStartDate}
                            dayRender={this.props.dateHighlighter}
                            validRange={{
                                start: trimTimeString(this.props.planStartDate),
                                end: getNextDate(this.props.planEndDate)
                            }}
                        />:
                        <div>
                            Loading
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Calendar;