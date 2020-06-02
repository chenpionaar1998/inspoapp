// Libraries 
import React from "react";
import { Card, CardBody } from "reactstrap";

// components
import Calendar from "./Calendar";

class CalendarContainer extends React.PureComponent {
    render() {
        return (
            <Card>
				<CardBody className="profile_card--calendar">
                        <Calendar/>
                </CardBody>
            </Card>
        )
    }
}

export default CalendarContainer;