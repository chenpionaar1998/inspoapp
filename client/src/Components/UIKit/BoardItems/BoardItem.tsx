// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PlanModal from '../PlanModal/PlanModal';

// Actions
import { EditPlanAction, DeletePlanAction } from '../../Dashboard/duck/Types';

// Types
import { TravelPlanInfoType, UserPlanLinkType } from '../PlanModal/types';

// Utils
import { trimTimeString } from '../../../utils/strings';

type BoardItemProps = {
    item: TravelPlanInfoType;
    username: string;
    editPlan: (formData: TravelPlanInfoType) => EditPlanAction;
    deletePlan: (userLink: UserPlanLinkType) => DeletePlanAction;
}

export default class BoardItem extends React.PureComponent<BoardItemProps> {
  D = (e: React.MouseEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    const userLink: UserPlanLinkType = {
      email: this.props.username,
      planID: this.props.item.planID
    };

    this.props.deletePlan(userLink);
  }

  render() {
    return (
      <div className="board">
        <Link className="board_link" to={'/'}>
          <div className="board_img-wrap">
            <img className="board_img" src={""} alt="board-img" />
          </div>
          <div className="board_info">
            <h4 className="board_title">{this.props.item.title}</h4>
          <p className="board_description">{trimTimeString(this.props.item.start)}</p>
            {/*{item.collaborators.map((c, index) => (
              <span
                key={index}
              />
            ))} */}
          </div>
        </Link>
        <div className="board_btn">
          <PlanModal
            item={this.props.item}
            username={this.props.username}
            buttonName="Edit plan"
            buttonText="Edit"
            onClick={this.props.editPlan}
          />
          <button 
            className="lnr lnr-cross board_close-btn" 
            type="button" 
            onClick={this.D} />
        </div>
      </div>
    )
  }
}