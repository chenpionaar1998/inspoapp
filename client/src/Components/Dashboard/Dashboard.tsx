// Libraries 
import React from "react";
import { Col, Container, Row } from "reactstrap";

// Components
import PlanModal from '../UIKit/PlanModal';

// Types
import { TravelPlanInfoType } from '../UIKit/types';
import { InsertPlanAction } from './duck/Types';

// Actions
import { linkUserToPlan } from "./duck/Actions";

type DashboardProps = {
    username: string;
    createPlan: (formData: TravelPlanInfoType) => InsertPlanAction;
}

class Dashboard extends React.PureComponent<DashboardProps> {

    render() {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <h3 className="page-title">Boards</h3>
                        <h3 className="page-subhead subhead">
							{" "}
							Click on a board to view your activity
						</h3>
                        <div className="board_createbtn">
							<PlanModal
                                username={this.props.username}
                                buttonName="Create a Plan"
                                buttonText="Create"
                                onClick={this.props.createPlan}
                                onLinkUser={linkUserToPlan}
							/>
						</div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Dashboard;