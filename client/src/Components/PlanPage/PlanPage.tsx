// Libraries 
import React from "react";
import { Col, Container, Row } from "reactstrap";

// Utils
import { getPlanIDFromURL } from "../../utils/url";
import { ClearPlanAction, UpdateCurrentPlanAction } from "./duck/Types";

// Components
import PlanInfoCard from "../UIKit/PlanPageCards/PlanInfoCard";
import CalendarContainer from "../Calendar/CalanderContainer";
import FeatureContainer from "../PlanPageFeatureTabs/FeatureContainer";

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
                                <FeatureContainer />
                            </Row>
                        </Col>
                        <Col md={12} lg={12} xl={8}>
                            <CalendarContainer/>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default PlanPage;