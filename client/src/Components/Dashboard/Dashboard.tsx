// Libraries 
import React from "react";
import { Col, Container, Row } from "reactstrap";

// Components
import PlanModal from '../UIKit/PlanModal/PlanModal';
import BoardItems from "../UIKit/BoardItems/BoardItems";
import LoadingIndicator from '../UIKit/LoadingIndicator';

// Types
import { TravelPlanInfoType, UserPlanLinkType } from '../UIKit/PlanModal/types';
import { InsertPlanAction, FetchPlanAction, EditPlanAction, DeletePlanAction } from './duck/Types';

// Actions
import { linkUserToPlan } from "./duck/Actions";

type DashboardProps = {
    username: string;
    plans: TravelPlanInfoType[];
    loaded: boolean;
    createPlan: (formData: TravelPlanInfoType) => InsertPlanAction;
    editPlan: (formData: TravelPlanInfoType) => EditPlanAction;
    deletePlan: (userLink: UserPlanLinkType) => DeletePlanAction;
    fetchPlansFromDB: (username: string) => FetchPlanAction;
}

class Dashboard extends React.PureComponent<DashboardProps> {
    componentDidMount () {
        this.props.fetchPlansFromDB(this.props.username);
    }

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
                <Row>
                    <Col md={12} lg={12}>
                        {!this.props.loaded &&
                            <div className="boards_wrap">
                                <div className="boards">
                                    <LoadingIndicator/>   
                                </div>
                            </div> 
                        }
                        <BoardItems
                            username={this.props.username}
                            items={this.props.plans}
                            editPlan={this.props.editPlan}
                            deletePlan={this.props.deletePlan}
                        />
                    </Col>
				</Row>
            </Container>
        )
    }
}

export default Dashboard;