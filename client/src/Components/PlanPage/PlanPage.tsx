// Libraries 
import React from "react";
import { Col, Container, Row } from "reactstrap";

// Utils
import { getPlanIDFromURL } from "../../utils/url";
import { ClearPlanAction, UpdateCurrentPlanAction } from "./duck/Types";

// Components
import PlanInfoCard from "../UIKit/PlanPageCards/PlanInfoCard";

type PlanPageProps = {
    currentPlanID: string;
    currentPlanTitle: string;
    currentPlanStartDate: string;
    getCurrentPlanInfo: (planID: string) => UpdateCurrentPlanAction;
    clearPlanPage: () => ClearPlanAction;
}

class PlanPage extends React.PureComponent<PlanPageProps> {
    state = {
    }

    componentWillMount() {
        const planID = getPlanIDFromURL();
        this.props.getCurrentPlanInfo(planID);
    }

    componentWillUnmount() {
        this.props.clearPlanPage();
    }

    render() {
        return (
            <Container>
                <div className="profile">
                    <Row>
                        <Col md={12} lg={12} xl={4}>
                            <Row>
                                <PlanInfoCard
                                    planID={this.props.currentPlanID}
                                    planTitle={this.props.currentPlanTitle}
                                    planStartDate={this.props.currentPlanStartDate}
                                />
                                {/* <ActivityPageMain
                                    planInfo={this.state.planInfo}
                                    collabList={this.state.collaborators}
                                />
                                <ActivityPageCalendar planInfo={this.state.planInfo} /> */}
                            </Row>
                        </Col>
                        {/* <ActivityPageTabs activities={this.state.activities} planTitle={this.state.planInfo.title}/> */}
                    </Row>
                </div>
            </Container>
        );
    }
}

export default PlanPage;