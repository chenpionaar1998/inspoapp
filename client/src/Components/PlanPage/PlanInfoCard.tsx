// Libraries
import React from 'react';
import {Card, CardBody, Col} from 'reactstrap';

// Utils
import { mapTimeToString } from "../../utils/time";

// Components
import EditCollaborators from '../Collaborators/EditCollaborators';

type PlanInfoCardProps = {
    planID: string;
    planTitle: string;
    planStartDate: string;
}

class PlanInfoCard extends React.PureComponent <PlanInfoCardProps> {
    render() {
        return (
            <Col md={12} lg={12} xl={12}>
                <Card>
                    <CardBody className="profile_card">
                        <div className="profile_information">
                            <div className="profile_avatar_holder"/>
                            {/* <a href="/gallery">
                                <img src={Ava} alt="avatar" />
                            </a> */}
                            <div className="profile_data">
                                <p className="profile_name">{this.props.planTitle}</p>
                                <p className="profile_work">{mapTimeToString(this.props.planStartDate)}</p>
                                <EditCollaborators planID={this.props.planID}/>
                            </div>
                        </div>
                        {/* <div className="profile_stats">
                            {this.state.collabList}
                        </div> */}
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default PlanInfoCard;