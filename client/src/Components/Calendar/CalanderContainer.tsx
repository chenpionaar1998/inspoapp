// Libraries 
import React from "react";
import { Card, CardBody } from "reactstrap";

// components
import Calendar from "./Calendar";

// Types
import { calendarCell } from './types'

// Util
import { withInRange } from "../../utils/time";

type CalendarContainerProps = {
    planStartDate: string;
    planEndDate: string;
}

type CalendarContainerState = {
    loaded: boolean;
}

class CalendarContainer extends React.PureComponent<CalendarContainerProps, CalendarContainerState> {
    state = {
        loaded: false
    }

    dateHighlighter = (cell: calendarCell): void => {
        if (withInRange(this.props.planStartDate, this.props.planEndDate, cell.date)){
            cell.el.style.backgroundColor = "#bce8f1";
            cell.el.style.opacity = "0.2";
        }
    }

    componentDidUpdate (prevProps: CalendarContainerProps) {
        if (this.props.planStartDate && 
            this.props.planEndDate && 
            prevProps.planStartDate !== this.props.planStartDate &&
            prevProps.planEndDate !== this.props.planEndDate) {
            this.setState({loaded: true});
            }
    }

    render() {
        return (
            <Card>
				<CardBody className="profile_card--calendar">
                    <Calendar
                        planStartDate={this.props.planStartDate}
                        shouldDisplayCalendar={this.state.loaded}
                        dateHighlighter={this.dateHighlighter}
                        />
                </CardBody>
            </Card>
        )
    }
}

export default CalendarContainer;