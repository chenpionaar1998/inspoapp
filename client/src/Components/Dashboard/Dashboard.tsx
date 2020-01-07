// Libraries 
import React from "react";
import { Col, Container, Row } from "reactstrap";

// Components
import CreatePlanModal from '../UIKit/CreatePlanModal';

class Dashboard extends React.PureComponent {

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
							<CreatePlanModal
								// onSubmit={this.createPlan}
							/>
						</div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Dashboard;